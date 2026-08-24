/**
 * Post-build fixups.
 *
 * The prototypes live in `public/demos/<slug>/index.html`, so `dist/demos/` is a real
 * directory. Astro (`build.format: 'file'`) emits the gallery page as `dist/demos.html`.
 * GitHub Pages resolves `/demos` against the directory first and would 404, so we copy
 * the gallery in as that directory's index too. Both URLs then serve the same page.
 */
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

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
