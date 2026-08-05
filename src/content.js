export const products = [
  {
    name: 'Talos',
    verb: 'Operar',
    status: 'En implantación',
    title: 'La operación de reparto, en un solo lugar.',
    description:
      'Convierte pedidos, consumo, flota y rutas en un plan diario que el equipo puede ver, ajustar y ejecutar.',
    features: [
      'Pedidos recibidos y estructurados',
      'Planificación y optimización de rutas',
      'Alertas de consumo y analítica operativa',
    ],
    motif: 'routes',
  },
  {
    name: 'NeuralGraph',
    verb: 'Verificar',
    status: 'I+D · developer preview',
    title: 'Evidencia verificable para agentes de IA.',
    description:
      'Conecta código, cambios, incidentes y conocimiento técnico para devolver contexto compacto donde cada afirmación conduce a una fuente exacta.',
    features: [
      'Grafo, vectores y procedencia en un núcleo',
      'Despliegue local y datos privados',
      'Abstención cuando no existe evidencia',
    ],
    motif: 'graph',
  },
  {
    name: 'Mostra',
    verb: 'Comunicar',
    status: 'Pilotos',
    title: 'De documentos a experiencias que se exploran.',
    description:
      'Transforma Excel, PDF y Word en una narrativa web interactiva con métricas, gráficos y conclusiones listas para compartir.',
    features: [
      'Extracción de datos con trazabilidad',
      'Narrativa y visualización automáticas',
      'Entrega web, no otro archivo estático',
    ],
    motif: 'story',
  },
]

export const principles = [
  {
    title: 'La realidad primero.',
    description: 'Empezamos por el dato que llega, no por el que debería llegar.',
  },
  {
    title: 'Evidencia, no espectáculo.',
    description: 'Una respuesta sin fuente es una hipótesis, no una certeza.',
  },
  {
    title: 'Propiedad sin dependencia.',
    description: 'El código, los datos y las decisiones permanecen bajo tu control.',
  },
  {
    title: 'Complejidad justificada.',
    description: 'Si no hace falta IA, lo decimos. No cobramos por complicar.',
  },
]

export const methodSteps = [
  ['Entender', 'Problema, usuarios y datos reales.'],
  ['Probar', 'La hipótesis crítica, con un prototipo medible.'],
  ['Construir', 'Producto observable, seguro y mantenible.'],
  ['Aprender', 'Uso real, límites claros y siguiente decisión.'],
]

export const numberLabel = (index) => String(index + 1).padStart(2, '0')
