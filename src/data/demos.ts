/**
 * Catálogo de demos públicas.
 *
 * Cada demo es un prototipo funcional autocontenido que vive en
 * `public/demos/<slug>/index.html` y se sirve en `/demos/<slug>/`.
 *
 * Los nombres de empresa son FICTICIOS. Los prototipos se construyeron sobre
 * operaciones reales, pero la marca y los datos están neutralizados: ninguna
 * empresa nombrada aquí existe ni es cliente.
 */

export type IdiomaDemo = 'es' | 'en';

export type Demo = {
  /** carpeta en public/demos y segmento de URL */
  slug: string;
  /** nombre ficticio de la empresa */
  nombre: string;
  /** rubro concreto, en una línea */
  rubro: string;
  /** clave de CATEGORIAS */
  categoria: string;
  /** el atasco operativo que el prototipo resuelve */
  resumen: string;
  /** los módulos que el visitante puede recorrer */
  modulos: string[];
  /** idioma de la interfaz del prototipo */
  idioma: IdiomaDemo;
};

export type Categoria = {
  clave: string;
  nombre: string;
  descripcion: string;
};

export const CATEGORIAS: Categoria[] = [
  {
    clave: 'alimentos',
    nombre: 'Alimentos: distribución y producción',
    descripcion:
      'Mayoristas, empacadoras y fábricas de alimento. Pedidos que entran por teléfono y WhatsApp, inventario que se lleva aparte, y trazabilidad que hoy vive en papel.',
  },
  {
    clave: 'catering',
    nombre: 'Catering y eventos',
    descripcion:
      'Operaciones donde cada evento es un proyecto. Cotizaciones, coordinación con el cliente y un historial que hoy está repartido entre correos y hojas de cálculo.',
  },
  {
    clave: 'piedra',
    nombre: 'Piedra, countertops y remodelación',
    descripcion:
      'Fabricación e instalación a medida. Cada trabajo pasa por medición, corte, instalación y cobro, y el estado real de cada uno vive en la cabeza del encargado.',
  },
  {
    clave: 'impresion',
    nombre: 'Imprenta, rotulación y señalización',
    descripcion:
      'Trabajos por encargo con arte, aprobaciones y reórdenes. El cuello de botella casi siempre es la cotización y el ir y venir de archivos.',
  },
  {
    clave: 'facility',
    nombre: 'Limpieza, mantenimiento y facility services',
    descripcion:
      'Cuadrillas en la calle, contratos recurrentes y clientes que piden evidencia. Lo que se despacha, lo que se hizo y lo que se factura rara vez están en el mismo lugar.',
  },
  {
    clave: 'manufactura',
    nombre: 'Manufactura y suministro especializado',
    descripcion:
      'Producción contra pedido y venta B2B. Cotizar rápido, no perder una solicitud y saber en qué etapa está cada trabajo.',
  },
];

export const DEMOS: Demo[] = [
  // ── Alimentos ───────────────────────────────────────────────────────────
  {
    slug: 'alltropicaldistr',
    nombre: 'Trópico Distribuidora',
    rubro: 'Distribuidora mayorista de alimentos tropicales, dos bodegas',
    categoria: 'alimentos',
    resumen:
      'Dos bodegas con inventarios separados y certificaciones que hay que poder probar. El sistema unifica existencias y deja la trazabilidad de cada lote a un clic.',
    modulos: ['Tablero de pedidos', 'Inventario unificado', 'Trazabilidad y compliance', 'Búsqueda y reportes'],
    idioma: 'es',
  },
  {
    slug: 'buddysfoodswhole',
    nombre: 'Rioverde Foods Mayoreo',
    rubro: 'Distribuidor mayorista de abarrotes y produce',
    categoria: 'alimentos',
    resumen:
      'Pedidos que llegan por teléfono y se anotan a mano. El sistema los arma solos a partir del historial del cliente y deja el catálogo consultable.',
    modulos: ['Pedidos del día', 'Detalle de pedido', 'Qué resuelve esto', 'Catálogo y reportes'],
    idioma: 'es',
  },
  {
    slug: 'chefsproduceco',
    nombre: 'Mesa Verde Produce',
    rubro: 'Produce fresco para restaurantes y hoteles',
    categoria: 'alimentos',
    resumen:
      'Producto perecedero: lo que no sale se pierde. El sistema mide la merma por orden y expone las cuentas por cobrar junto al tablero del día.',
    modulos: ['Tablero de hoy', 'Detalle de orden', 'Control de merma', 'Cuentas por cobrar'],
    idioma: 'es',
  },
  {
    slug: 'citymeatsteakcoi',
    nombre: 'Empacadora Central de Carnes',
    rubro: 'Empacadora y distribuidora de carnes',
    categoria: 'alimentos',
    resumen:
      'Pedidos por peso, cortes y clientes que repiten. El módulo antes y después muestra el mismo día de trabajo con y sin sistema.',
    modulos: ['Pedidos del día', 'Detalle de pedido', 'Antes y después', 'Búsqueda y reportes'],
    idioma: 'es',
  },
  {
    slug: 'meatplanetinc',
    nombre: 'Carnes del Norte',
    rubro: 'Carnicería mayorista y menudeo, empresa familiar',
    categoria: 'alimentos',
    resumen:
      'Vende al mayoreo y al mostrador con el mismo inventario. El sistema avisa cuando un corte va a faltar antes de que el cliente lo pida.',
    modulos: ['Tablero de pedidos', 'Ficha de cliente', 'Inventario y alertas', 'Búsqueda y reportes'],
    idioma: 'es',
  },
  {
    slug: 'mestanzaproducel',
    nombre: 'Valle Alto Produce',
    rubro: 'Distribuidora de produce con reparto propio',
    categoria: 'alimentos',
    resumen:
      'El reparto se arma cada mañana sobre la marcha. El sistema ordena las rutas y deja ver en qué punto va cada entrega.',
    modulos: ['Operaciones del día', 'Ficha de pedido', 'Rutas y despacho', 'Clientes y reportes'],
    idioma: 'es',
  },
  {
    slug: 'lacamperatortill',
    nombre: 'Tortillería La Vega',
    rubro: 'Fábrica de tortillas con clientes B2B',
    categoria: 'alimentos',
    resumen:
      'Restaurantes que piden lo mismo cada semana por WhatsApp. El portal deja que el cliente repita su pedido solo y libera el teléfono.',
    modulos: ['Tablero de pedidos', 'Detalle de orden', 'Antes vs. ahora', 'Búsqueda y reporte'],
    idioma: 'es',
  },
  {
    slug: 'cakeandbacon',
    nombre: 'Horno Real',
    rubro: 'Panadería mayorista',
    categoria: 'alimentos',
    resumen:
      'Cuentas que dejan de pedir sin avisar. El sistema marca la cuenta en riesgo antes de que se pierda y prepara el mensaje para recuperarla.',
    modulos: ['Operaciones de hoy', 'Ficha de cuenta', 'Cuentas en riesgo', 'Búsqueda y reportes'],
    idioma: 'es',
  },

  // ── Catering y eventos ──────────────────────────────────────────────────
  {
    slug: 'alacarte',
    nombre: 'Mesa Larga Eventos y Catering',
    rubro: 'Catering y producción de eventos, empresa certificada',
    categoria: 'catering',
    resumen:
      'Cada evento arrastra un historial de preferencias, alergias y montajes. El sistema lo guarda por cliente para que no se vuelva a preguntar.',
    modulos: ['Agenda de clientes', 'Ficha del cliente', 'Nueva propuesta', 'Reporte de certificaciones'],
    idioma: 'es',
  },
  {
    slug: 'goodecompanycate',
    nombre: 'Live Oak Catering Co',
    rubro: 'Catering de un grupo restaurantero',
    categoria: 'catering',
    resumen:
      'Las solicitudes entran a una bandeja compartida y se pierden entre correos. El sistema las convierte en eventos con dueño y fecha de respuesta.',
    modulos: ['Tablero de hoy', 'Detalle del evento', 'El problema de la bandeja', 'Búsqueda y reportes'],
    idioma: 'es',
  },
  {
    slug: 'jacksoncompany',
    nombre: 'Bellaire & Co.',
    rubro: 'Catering de lujo y producción integral de eventos',
    categoria: 'catering',
    resumen:
      'Propuestas largas que se arman a mano cada vez. El constructor de propuestas las genera desde el historial de la cuenta.',
    modulos: ['Tablero de operaciones', 'Cuenta del cliente', 'Constructor de propuestas', 'Búsqueda y reportes'],
    idioma: 'es',
  },
  {
    slug: 'localfoodsricevi',
    nombre: 'Mercado Sur Cocina y Catering',
    rubro: 'Restaurante con programa de catering corporativo',
    categoria: 'catering',
    resumen:
      'El menú cambia por temporada y el catering corporativo corre en paralelo al salón. El sistema sincroniza ambos sin duplicar trabajo.',
    modulos: ['Operaciones del día', 'Pipeline de catering', 'Sincronía de menú', 'Reportes y búsqueda'],
    idioma: 'es',
  },

  // ── Piedra y remodelación ───────────────────────────────────────────────
  {
    slug: 'craigbakermarble',
    nombre: 'Bayou Stone & Remodel',
    rubro: 'Remodelación completa con fabricación de countertops',
    categoria: 'piedra',
    resumen:
      'Un trabajo pasa por medición, corte, instalación y cobro, y el estado real se pregunta por teléfono. El tablero lo deja a la vista.',
    modulos: ['Tablero del día', 'Detalle del trabajo', 'Qué cambia', 'Búsqueda y reportes'],
    idioma: 'es',
  },
  {
    slug: 'grandstonellc',
    nombre: 'Piedra Grande Countertops',
    rubro: 'Fabricación e instalación de countertops',
    categoria: 'piedra',
    resumen:
      'La factura se arma aparte del proyecto y hay que rehacer el cálculo. Aquí la facturación sale conectada a lo que realmente se instaló.',
    modulos: ['Tablero de órdenes', 'Ficha de proyecto', 'Facturación conectada', 'Reportes'],
    idioma: 'es',
  },
  {
    slug: 'granitemaster',
    nombre: 'Sterling Granite Works',
    rubro: 'Granito a medida, taller familiar con 20 años',
    categoria: 'piedra',
    resumen:
      'Las consultas llegan por varios lados y algunas nunca se contestan. La captura de prospectos las junta en una sola fila con seguimiento.',
    modulos: ['Tablero del día', 'Detalle del trabajo', 'Captura de prospectos', 'Búsqueda y reportes'],
    idioma: 'es',
  },
  {
    slug: 'tajamsmarbleandg',
    nombre: 'Solano Mármol y Granito',
    rubro: 'Importador y distribuidor de piedra, varios showrooms',
    categoria: 'piedra',
    resumen:
      'Inventario de losas repartido en varios showrooms y prospectos que quieren reservar. El sistema muestra existencias en vivo y permite apartar.',
    modulos: ['Operaciones del día', 'Detalle del proyecto', 'Inventario en vivo', 'Pipeline de prospectos'],
    idioma: 'es',
  },
  {
    slug: 'pyramid',
    nombre: 'Azteca Imports',
    rubro: 'Importadora de azulejo y pisos, 50 años en el mercado',
    categoria: 'piedra',
    resumen:
      'Lo que llega por contenedor se registra por lote y se vende en mostrador y en línea. El sistema conecta bodega, precios y venta.',
    modulos: ['Lotes en bodega', 'Ficha de lote', 'Precios', 'Mostrador y web'],
    idioma: 'es',
  },

  // ── Imprenta y rotulación ───────────────────────────────────────────────
  {
    slug: 'houstongraphicsi',
    nombre: 'Westpark Signs & Graphics',
    rubro: 'Rotulación comercial y señalización',
    categoria: 'impresion',
    resumen:
      'Cada rótulo es un proyecto con arte, permisos e instalación. El tablero muestra en qué etapa está cada uno sin preguntar.',
    modulos: ['Tablero de proyectos', 'Perfil del cliente', 'Por qué esto importa', 'Búsqueda y reportes'],
    idioma: 'es',
  },
  {
    slug: 'joviprinting',
    nombre: 'Imprenta Delta',
    rubro: 'Imprenta y bordado, 30 años',
    categoria: 'impresion',
    resumen:
      'Cotizar quita horas al teléfono. El cotizador en línea responde solo y el CRM detecta cuándo toca la reorden.',
    modulos: ['Tablero de trabajos', 'Ficha de cliente', 'Cotizador en línea', 'Reórdenes y CRM'],
    idioma: 'es',
  },
  {
    slug: 'onesourceprintin',
    nombre: 'Printworks Direct',
    rubro: 'Imprenta comercial',
    categoria: 'impresion',
    resumen:
      'Órdenes que van y vienen por correo hasta la aprobación. El módulo antes y después contrasta el flujo actual contra el que propone el sistema.',
    modulos: ['Tablero de operaciones', 'Detalle de orden', 'Antes y después', 'Reportes y búsqueda'],
    idioma: 'es',
  },

  // ── Limpieza y facility ─────────────────────────────────────────────────
  {
    slug: 'lmcommercialclea',
    nombre: 'Aurora Commercial Cleaning',
    rubro: 'Limpieza comercial, empresa de mujeres',
    categoria: 'facility',
    resumen:
      'Cuadrillas en varios sitios y cotizaciones que se piden por formulario. El sistema junta despacho, alta de cliente y cotización.',
    modulos: ['Operaciones del día', 'Ficha del cliente', 'Cotización y alta', 'Reportes y búsqueda'],
    idioma: 'es',
  },
  {
    slug: 'protechfacilitys',
    nombre: 'Sentinel Facility Services',
    rubro: 'Servicios de facility y restauración, 40 años',
    categoria: 'facility',
    resumen:
      'Órdenes de trabajo que el cliente quiere poder consultar. El portal les da estado y evidencia sin que nadie tenga que contestar el teléfono.',
    modulos: ['Tablero de despacho', 'Detalle de orden de trabajo', 'Portal del cliente', 'Reportes y búsqueda'],
    idioma: 'es',
  },
  {
    slug: 'zionjanitorialho',
    nombre: 'Meridian Janitorial',
    rubro: 'Limpieza comercial, empresa familiar',
    categoria: 'facility',
    resumen:
      'Una solicitud que tarda dos días en contestarse es una solicitud perdida. El sistema responde en el momento y arma la cotización con la firma de la empresa.',
    modulos: ['Operación diaria', 'Ficha de cliente', 'El problema resuelto', 'Búsqueda y reportes'],
    idioma: 'es',
  },
  {
    slug: 'earthworkslandsc',
    nombre: 'Terrano Landscape & Maintenance',
    rubro: 'Paisajismo y mantenimiento de áreas verdes',
    categoria: 'facility',
    resumen:
      'Cuadrillas que salen cada mañana y clientes con contrato recurrente. El despacho diario y el expediente del cliente van juntos.',
    modulos: ['Despacho diario', 'Expediente del cliente', 'Flujo de cotización', 'Búsqueda y reportes'],
    idioma: 'es',
  },

  // ── Manufactura y suministro ────────────────────────────────────────────
  {
    slug: 'eliteformmetalpr',
    nombre: 'Ironline Metal Products',
    rubro: 'Manufactura de productos metálicos, dos bodegas',
    categoria: 'manufactura',
    resumen:
      'Cotizar un trabajo metálico requiere material, horas y acabado. El cotizador los junta y el tablero sigue el job hasta control de calidad.',
    modulos: ['Tablero de jobs', 'Ficha de job', 'Nueva cotización', 'Búsqueda y reportes'],
    idioma: 'es',
  },
  {
    slug: 'vico',
    nombre: 'Northline Metal Stamping',
    rubro: 'Estampado metálico por pedido, planta de 42,000 pies',
    categoria: 'manufactura',
    resumen:
      'Las solicitudes de cotización llegan por correo y algunas se enfrían sin respuesta. El sistema las pone en fila con reloj y guarda el archivo de calidad.',
    modulos: ['Solicitudes entrantes', 'Tablero de trabajos', 'Ficha de trabajo', 'Archivo de calidad'],
    idioma: 'es',
  },
  {
    slug: 'crownscrubsmedsu',
    nombre: 'Vitals Uniformes y Suministro Médico',
    rubro: 'Uniformes médicos y suministro, venta retail y B2B',
    categoria: 'manufactura',
    resumen:
      'Vende al público y a clínicas con condiciones distintas. El portal B2B deja que la cuenta institucional pida sola, con su lista y sus precios.',
    modulos: ['Tablero general', 'Detalle de cuenta', 'Portal de pedidos B2B', 'Inventario y reportes'],
    idioma: 'es',
  },
];

/** Demos de una categoría, en el orden declarado arriba. */
export function demosDe(clave: string): Demo[] {
  return DEMOS.filter((d) => d.categoria === clave);
}
