/**
 * Post-build fixups.
 *
 * 1. `/demos` route: the prototypes live in `public/demos/<slug>/index.html`, so
 *    `dist/demos/` is a real directory. Astro (`build.format: 'file'`) emits the
 *    gallery page as `dist/demos.html`. GitHub Pages resolves `/demos` against the
 *    directory first and would 404, so the gallery is copied in as that directory's
 *    index too. Both URLs then serve the same page.
 *
 * 2. `llms-full.txt`: generated from the built pages instead of maintained by hand.
 *    The hand-written version drifted badly (it still described a templates store
 *    removed in Aug 2026 and named clients who were anonymized site-wide). Deriving
 *    it from `dist` means it cannot go stale again.
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

/* ── 1. duplicar la galeria como indice de su directorio ─────────────────── */

/** [pagina emitida por Astro, indice de directorio que debe existir] */
const duplicados = [['demos.html', join('demos', 'index.html')]];

for (const [origen, destino] of duplicados) {
  const src = join(dist, origen);
  const dest = join(dist, destino);
  if (!existsSync(src)) {
    console.warn(`postbuild: no encontrado ${origen}, se omite`);
    continue;
  }
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
  console.log(`postbuild: ${origen} -> ${destino}`);
}

/* ── 2. generar llms-full.txt desde las paginas construidas ──────────────── */

/** Todas las rutas .html de dist, sin las maquetas ni los duplicados. */
function paginas(dir, acc = []) {
  for (const entrada of readdirSync(dir)) {
    const ruta = join(dir, entrada);
    if (statSync(ruta).isDirectory()) {
      if (entrada === 'demos' || entrada === '_astro') continue;
      paginas(ruta, acc);
    } else if (entrada.endsWith('.html')) {
      acc.push(ruta);
    }
  }
  return acc;
}

const entidades = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'",
  '&rsquo;': '’', '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”',
  '&mdash;': '—', '&ndash;': '–', '&nbsp;': ' ', '&rarr;': '→',
  '&larr;': '←', '&middot;': '·', '&bull;': '•', '&times;': '×',
};

function aTexto(html) {
  return html
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\/(h[1-6]|p|li|section|div|blockquote|figcaption|dd|dt)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, (e) => entidades[e.toLowerCase()] ?? ' ')
    .split('\n')
    .map((l) => l.replace(/[ \t ]+/g, ' ').trim())
    .filter(Boolean)
    .join('\n');
}

/** Una pagina de redireccion de Astro: nada que indexar. */
const esRedireccion = (html) => /http-equiv="refresh"/i.test(html);

/** Paginas marcadas noindex (el 404, por ejemplo) tampoco van al indice. */
const esNoindex = (html) => /<meta[^>]+name="robots"[^>]+noindex/i.test(html);

const rutaPublica = (archivo) => {
  const rel = relative(dist, archivo).split(sep).join('/');
  return '/' + rel.replace(/(index)?\.html$/, '').replace(/\/$/, '');
};

const bloques = [];
for (const archivo of paginas(dist).sort()) {
  const html = readFileSync(archivo, 'utf8');
  if (esRedireccion(html) || esNoindex(html)) continue;
  const titulo = (html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '').trim();
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const cuerpo = aTexto(main);
  if (!cuerpo) continue;
  bloques.push(`## ${titulo}\nURL: https://pocho.tech${rutaPublica(archivo) || '/'}\n\n${cuerpo}`);
}

const cabecera = readFileSync(join(dist, 'llms.txt'), 'utf8').split('\n## ')[0].trim();
const salida = `# pocho.tech, contenido completo del sitio

${cabecera.split('\n').slice(1).join('\n').trim()}

Este archivo se genera solo desde las paginas construidas en cada despliegue, asi que no puede quedar desactualizado. Las veintisiete maquetas de /demos no se incluyen: son prototipos interactivos con datos ficticios.

---

${bloques.join('\n\n---\n\n')}
`;

writeFileSync(join(dist, 'llms-full.txt'), salida, 'utf8');
console.log(`postbuild: llms-full.txt generado desde ${bloques.length} paginas`);
