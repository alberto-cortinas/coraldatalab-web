export const languagePaths = {
  es: '/neuralgraph/',
  ca: '/neuralgraph/ca/',
  en: '/neuralgraph/en/',
}

export const privacyPaths = {
  es: '/privacidad/',
  ca: '/privacidad/ca/',
  en: '/privacidad/en/',
}

export const languageLabels = { es: 'ES', ca: 'CA', en: 'EN' }

export function currentLanguage() {
  const language = document.documentElement.lang.split('-')[0]
  return language in languagePaths ? language : 'es'
}

export const neuralGraphCopy = {
  es: {
    skip: 'Saltar al contenido', contact: 'Contacto', languageNav: 'Cambiar idioma',
    status: 'Investigación en curso · Buscamos socios de diseño',
    heroTitle: ['Inteligencia Artificial', 'en el ADN del producto.'],
    heroLead: 'Diseñamos el modelo, los datos y la experiencia como un único sistema desde el origen. No añadimos IA como una capa sobre software heredado.',
    researchCta: 'Participar en la investigación', talkCta: 'Hablar con el equipo',
    problemLabel: '01 / El problema', problemTitle: 'Una pila fragmentada es difícil de operar.',
    problemLead: 'Llevar RAG a producción suele implicar integrar bases vectoriales, motores de grafos, pipelines de ingestión, modelos de embeddings y sistemas de observabilidad independientes.',
    problemBody: 'NeuralGraph explora una infraestructura unificada para reducir esa fragmentación.',
    capabilitiesLabel: '02 / Investigación', capabilitiesTitle: 'Capacidades que estamos validando',
    capabilities: ['RAG vectorial, híbrido y GraphRAG.','Generación y almacenamiento de embeddings.','Extracción de entidades y relaciones.','Algoritmos de grafos y detección de comunidades.','Recuperación con procedencia y explicabilidad.','Ingestión incremental y actualización del conocimiento.','Observabilidad, evaluación, coste y latencia.','Despliegue cloud, on-premise o embebido.','Core nativo en Rust.'],
    audienceLabel: '03 / Para quién', audienceTitle: 'Equipos que ya conocen el coste de operar RAG.',
    audienceBody: 'Equipos de AI Platform, Data Platform y Engineering con RAG en piloto o producción que necesitan mayor control, rendimiento y mantenibilidad.',
    audienceAria: 'Equipos objetivo', stateLabel: '04 / Estado del producto', stateTitle: 'Descubrimiento y diseño.',
    stateBody: 'NeuralGraph está en fase de descubrimiento y diseño. Estamos entrevistando a equipos que operan sistemas de recuperación y GenAI para priorizar los problemas correctos.',
    stateNote: 'Sin promesas prematuras. La evidencia define el producto.', ctaLabel: 'Participa',
    ctaTitle: '¿Trabajas con RAG, GraphRAG o búsqueda basada en IA?',
    ctaBody: 'Comparte tu experiencia en una encuesta de tres minutos y ayúdanos a diseñar una infraestructura útil para producción.',
    surveyCta: 'Responder la encuesta', initiative: 'NeuralGraph es una iniciativa de Coral Data Lab.', privacy: 'Política de privacidad',
    thanksLabel: 'Investigación NeuralGraph', thanksTitle: 'Gracias por compartir tu experiencia.',
    thanksBody: 'Tu respuesta nos ayudará a priorizar problemas reales de infraestructura RAG.', thanksBack: 'Volver a NeuralGraph',
  },
  ca: {
    skip: 'Saltar al contingut', contact: 'Contacte', languageNav: 'Canviar idioma',
    status: 'Recerca en curs · Busquem socis de disseny',
    heroTitle: ['Intel·ligència Artificial', 'en l’ADN del producte.'],
    heroLead: 'Dissenyem el model, les dades i l’experiència com un únic sistema des de l’origen. No afegim IA com una capa sobre programari heretat.',
    researchCta: 'Participar en la recerca', talkCta: 'Parlar amb l’equip',
    problemLabel: '01 / El problema', problemTitle: 'Una pila fragmentada és difícil d’operar.',
    problemLead: 'Portar RAG a producció sol implicar integrar bases vectorials, motors de grafs, pipelines d’ingesta, models d’embeddings i sistemes d’observabilitat independents.',
    problemBody: 'NeuralGraph explora una infraestructura unificada per reduir aquesta fragmentació.',
    capabilitiesLabel: '02 / Recerca', capabilitiesTitle: 'Capacitats que estem validant',
    capabilities: ['RAG vectorial, híbrid i GraphRAG.','Generació i emmagatzematge d’embeddings.','Extracció d’entitats i relacions.','Algoritmes de grafs i detecció de comunitats.','Recuperació amb procedència i explicabilitat.','Ingesta incremental i actualització del coneixement.','Observabilitat, avaluació, cost i latència.','Desplegament cloud, on-premise o integrat.','Nucli natiu en Rust.'],
    audienceLabel: '03 / Per a qui', audienceTitle: 'Equips que ja coneixen el cost d’operar RAG.',
    audienceBody: 'Equips d’AI Platform, Data Platform i Engineering amb RAG en pilot o producció que necessiten més control, rendiment i mantenibilitat.',
    audienceAria: 'Equips objectiu', stateLabel: '04 / Estat del producte', stateTitle: 'Descobriment i disseny.',
    stateBody: 'NeuralGraph es troba en fase de descobriment i disseny. Estem entrevistant equips que operen sistemes de recuperació i GenAI per prioritzar els problemes correctes.',
    stateNote: 'Sense promeses prematures. L’evidència defineix el producte.', ctaLabel: 'Participa',
    ctaTitle: 'Treballes amb RAG, GraphRAG o cerca basada en IA?',
    ctaBody: 'Comparteix la teva experiència en una enquesta de tres minuts i ajuda’ns a dissenyar una infraestructura útil per a producció.',
    surveyCta: 'Respondre l’enquesta', initiative: 'NeuralGraph és una iniciativa de Coral Data Lab.', privacy: 'Política de privacitat',
    thanksLabel: 'Recerca NeuralGraph', thanksTitle: 'Gràcies per compartir la teva experiència.',
    thanksBody: 'La teva resposta ens ajudarà a prioritzar problemes reals d’infraestructura RAG.', thanksBack: 'Tornar a NeuralGraph',
  },
  en: {
    skip: 'Skip to content', contact: 'Contact', languageNav: 'Change language',
    status: 'Research preview · Seeking design partners',
    heroTitle: ['Artificial Intelligence', 'in the product’s DNA.'],
    heroLead: 'We design the model, data and experience as a single system from the start. We do not add AI as a layer on top of legacy software.',
    researchCta: 'Join the research', talkCta: 'Talk to the team',
    problemLabel: '01 / The problem', problemTitle: 'A fragmented stack is difficult to operate.',
    problemLead: 'Taking RAG to production often means integrating separate vector databases, graph engines, ingestion pipelines, embedding models and observability systems.',
    problemBody: 'NeuralGraph explores unified infrastructure to reduce that fragmentation.',
    capabilitiesLabel: '02 / Research', capabilitiesTitle: 'Capabilities we are validating',
    capabilities: ['Vector, hybrid and GraphRAG retrieval.','Embedding generation and storage.','Entity and relationship extraction.','Graph algorithms and community detection.','Retrieval with provenance and explainability.','Incremental ingestion and knowledge updates.','Observability, evaluation, cost and latency.','Cloud, on-premise or embedded deployment.','Rust-native core.'],
    audienceLabel: '03 / Who it is for', audienceTitle: 'Teams that already know the cost of operating RAG.',
    audienceBody: 'AI Platform, Data Platform and Engineering teams with RAG in pilot or production that need greater control, performance and maintainability.',
    audienceAria: 'Target teams', stateLabel: '04 / Product status', stateTitle: 'Discovery and design.',
    stateBody: 'NeuralGraph is in discovery and design. We are interviewing teams operating retrieval and GenAI systems to prioritize the right problems.',
    stateNote: 'No premature promises. Evidence defines the product.', ctaLabel: 'Take part',
    ctaTitle: 'Do you work with RAG, GraphRAG or AI-powered search?',
    ctaBody: 'Share your experience in a three-minute survey and help us design infrastructure that is useful in production.',
    surveyCta: 'Take the survey', initiative: 'NeuralGraph is a Coral Data Lab initiative.', privacy: 'Privacy policy',
    thanksLabel: 'NeuralGraph research', thanksTitle: 'Thank you for sharing your experience.',
    thanksBody: 'Your response will help us prioritize real RAG infrastructure problems.', thanksBack: 'Back to NeuralGraph',
  },
}
