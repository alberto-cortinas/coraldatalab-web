# Coral Data Lab · web corporativa

Documento maestro de marca, marketing, contenido y sistema visual.

Versión consolidada · agosto de 2026

## Desarrollo

La web está construida con React y Vite. El contenido reutilizable vive en
`src/content.js`, los elementos de interfaz compartidos en `src/components/` y la
composición de la landing en `src/App.jsx`.

```bash
npm install
npm run dev
```

Para generar la versión optimizada de producción:

```bash
npm run build
```

## 1. Decisión principal

Coral Data Lab es una **casa de producto AI-native**.

> **IA en el ADN del producto. No como una capa.**

Modelo, datos, lógica de producto y experiencia se diseñan juntos desde el origen. No añadimos un asistente o una llamada a un modelo sobre software legacy creado para otro momento.

Esta decisión prevalece sobre cualquier narrativa anterior del proyecto.

## 2. Posicionamiento

### Categoría

Product lab AI-native.

### Propuesta de valor

Coral Data Lab construye productos con la IA en su ADN, diseñando datos, modelo y experiencia como un único sistema desde el origen.

### Problema

La mayoría del software incorpora IA como una capa: un chatbot, un asistente o una llamada a un modelo conectada a una arquitectura heredada. El resultado conserva los límites del producto legacy y apenas cambia el trabajo que debía mejorar.

### Diferenciación

1. **AI-native desde el origen.** La IA participa en la definición de la arquitectura, el flujo y la experiencia.
2. **Evidencia integrada.** La trazabilidad forma parte del resultado, no de un informe posterior.
3. **Datos reales.** La validación empieza donde aparecen datos incompletos, límites y excepciones.
4. **Alcance honesto.** No presentamos hipótesis, prototipos o investigación como productos maduros.
5. **Control del cliente.** Evitamos cajas negras y dependencias artificiales.

### Declaración completa

Para organizaciones que quieren rediseñar un trabajo alrededor de las capacidades de la IA, Coral Data Lab es un laboratorio de producto AI-native. A diferencia del software legacy con una capa de IA añadida, construye modelo, datos, lógica de producto y experiencia como una sola pieza desde el origen.

## 3. Audiencias

- Responsables de operaciones con procesos críticos repartidos entre correo, hojas de cálculo y sistemas heredados.
- Líderes de datos, plataforma, developer productivity o SRE que necesitan respuestas verificables y privadas.
- Equipos de análisis, finanzas y producto que convierten documentos y datos en comunicación recurrente.

## 4. Arquitectura de marca

Coral Data Lab funciona como marca madre y sello de criterio, investigación y construcción. Talos, NeuralGraph y Mostra son **marcas respaldadas**: mantienen un nombre y territorio propios, pero se presentan como productos de Coral Data Lab.

La cartera se ordena mediante tres trabajos:

| Trabajo | Producto | Resultado |
|---|---|---|
| Operar | Talos | Un plan operativo visible y ejecutable |
| Verificar | NeuralGraph | Evidencia trazable para personas y agentes |
| Comunicar | Mostra | Una narrativa interactiva que se entiende |

### Talos · Operar

- **Estado público:** En implantación.
- **Audiencia inicial:** distribuidores con planificación de pedidos, flota y consumo.
- **Promesa:** la operación de reparto, en un solo lugar.
- **Descripción:** convierte pedidos, consumo, flota y rutas en un plan diario que el equipo puede ver, ajustar y ejecutar.
- **Prueba de producto:** entrada de pedidos, backlog, asignación, optimización, mapas, consumo y alertas.
- **Límite:** no presentarlo todavía como plataforma logística universal.

### NeuralGraph · Verificar

- **Estado público:** I+D · developer preview.
- **Audiencia inicial:** equipos de plataforma, developer productivity y SRE con requisitos de privacidad.
- **Promesa:** evidencia verificable para agentes de IA.
- **Descripción:** conecta código, cambios, incidentes y conocimiento técnico para devolver contexto compacto donde cada afirmación conduce a una fuente exacta.
- **Prueba de producto:** núcleo Rust que comparte identidades y consistencia entre grafo, vector, texto, tiempo y procedencia.
- **Límite:** no afirmar mejoras de rendimiento hasta publicar benchmarks reproducibles.

### Mostra · Comunicar

- **Estado público:** Pilotos.
- **Audiencia inicial:** analistas, BI managers, controllers y product managers con reporting recurrente.
- **Promesa:** de documentos a experiencias que se exploran.
- **Descripción:** transforma Excel, PDF y Word en una narrativa web interactiva con métricas, gráficos y conclusiones listas para compartir.
- **Prueba de producto:** pipeline de extracción, planificación narrativa, visualización y publicación web.
- **Límite:** no presentarlo todavía como SaaS autoservicio maduro.

## 5. Valores

### La realidad primero

Partimos de los datos y procesos que existen, no de los que deberían existir. Una limitación descubierta pronto es progreso.

### Evidencia antes que autoridad

Una respuesta no es fiable por venir de una IA. La fuente, el recorrido y el límite deben poder inspeccionarse.

### Propiedad sin dependencia

El código, los datos y el conocimiento operativo permanecen bajo control del cliente.

### Complejidad justificada

Usamos IA, grafos u optimización cuando mejoran el resultado. Si una regla sencilla resuelve el problema, elegimos la regla.

### Oficio de producto

Una idea solo cuenta cuando alguien puede usarla. Cuidamos entrada, decisión, interfaz, errores, operación y aprendizaje.

## 6. Identidad verbal

### Personalidad

- Precisa, no fría.
- Ambiciosa, no grandilocuente.
- Técnica, no críptica.
- Editorial, no corporativa.
- Honesta, no tímida.

### Reglas

- Frases cortas y verbos activos.
- Hablar del trabajo del usuario antes que de la tecnología.
- Usar tecnología como prueba, no como titular.
- Nombrar límites y estados de producto.
- No usar signos de exclamación ni superlativos vacíos.
- Evitar: *revolucionario, disruptivo, potenciar, transformación* y *solución a medida*.

### Mensajes

- **Institucional:** Creamos productos con la IA en su ADN: Talos para operar, NeuralGraph para verificar y Mostra para comunicar.
- **Operaciones:** Un plan diario construido con pedidos, consumo, rutas y capacidad reales.
- **Ingeniería:** Agentes que investigan con evidencia exacta y trabajan dentro de tu entorno.
- **Datos y negocio:** Convierte el material del informe en una experiencia que tus stakeholders pueden explorar.

### Taglines secundarios

- Productos nacidos con IA, no actualizados con ella.
- AI-native desde el primer dato.
- No añadimos IA al producto. Construimos el producto desde la IA.

## 7. Identidad visual

### Concepto

**Estructuras vivas.** El coral representa una red que crece a partir de relaciones reales. La gramática visual usa nodos, conexiones, rutas, barras y capas de evidencia; evita la fotografía corporativa genérica.

### Paleta

| Rol | Token | Valor |
|---|---|---|
| Fondo papel | `--paper` | `#FBFAF7` |
| Superficie cálida | `--warm` | `#F3EFE8` |
| Texto principal | `--n-900` | `#15181C` |
| Texto secundario | `--n-600` | `#4D5661` |
| Coral de marca | `--c-500` | `#D8432B` |
| Coral accesible | `--c-600` | `#B5341F` |
| Coral profundo | `--c-700` | `#8C2716` |
| Banda profunda | `--ink-900` | `#0E1A1F` |

El coral no ocupa más del 10% de la superficie. `--c-500` se usa en marca y motivos; los botones usan `--c-600` porque alcanza un contraste de 6:1 con texto blanco.

### Tipografía

| Rol | Familia | Uso |
|---|---|---|
| Display | Fraunces 400/500 | Titulares de 24 px o más |
| Texto e interfaz | Inter 400/500 | Párrafos, navegación y controles |
| Datos | JetBrains Mono 400/500 | Estados, índices y cifras |

Las tres familias se cargan desde Google Fonts durante el desarrollo. Antes de publicar deben servirse desde el dominio propio.

### Composición

1. Un solo botón primario por pantalla.
2. Una sola banda profunda por página.
3. Sin sombras; la separación se construye con espacio y filetes de 1 px.
4. Solo pesos 400 y 500.
5. Nunca mayúsculas sostenidas.
6. Medida máxima de 68 caracteres en texto corrido.
7. Fraunces solo a partir de 24 px.
8. JetBrains Mono nunca se usa para texto corrido.
9. La numeración solo aparece cuando el orden importa.
10. El estado nunca se comunica únicamente mediante color.

### Logotipo

Wordmark “Coral Data Lab” acompañado por tres nodos conectados. Los tres nodos representan productos distintos que comparten una misma raíz. La landing utiliza una versión construida con CSS; antes de publicación debe existir un archivo maestro y un favicon.

### Territorio de producto

- Talos: rutas, secuencias y mapas.
- NeuralGraph: nodos, relaciones y anclas de evidencia.
- Mostra: composición editorial, barras y ritmo de página.

## 8. Copy de la landing

### Hero

- **Eyebrow:** Productos AI-native · I+D propio
- **Titular:** IA en el ADN del producto. No como una capa.
- **Bajada:** Diseñamos el modelo, los datos y la experiencia como un único sistema desde el origen. No añadimos IA al final sobre software heredado.
- **CTA primario:** Conocer los productos
- **CTA secundario:** Plantear un proyecto

### Prueba de método

1. La IA define el producto desde el inicio.
2. Datos, modelo y experiencia nacen juntos.
3. Diseñamos para los datos de verdad.

### Tesis

> **Un producto AI-native no empieza por añadir un modelo.**

Empieza por replantear el trabajo completo alrededor de lo que la IA permite hacer. Ingestión, modelo, recuperación, decisiones e interfaz se diseñan como una sola pieza. Así la IA puede comprender el contexto, actuar dentro del flujo real y explicar su resultado.

### CTA final

- **Titular:** ¿Dónde se atasca hoy la decisión?
- **Texto:** Cuéntanos el problema, qué datos existen y quién necesita decidir. Si no encaja con lo que hacemos, también te lo diremos.
- **Acción:** Escribir a `hola@coraldatalab.com`.

## 9. Marketing inicial

### Descubrimiento

- Publicar notas técnicas y de producto con resultados, límites y decisiones.
- Usar *operar, verificar y comunicar* como serie editorial.
- Mostrar el antes y el después del trabajo, no recorridos genéricos de interfaz.

### Consideración

- Talos: demo reproducible de una semana de pedidos y rutas.
- NeuralGraph: benchmark público con preguntas bloqueadas, citas y comparación vector-only.
- Mostra: galería de tres outputs creados desde documentos representativos.

### Conversión

- CTA institucional: **Plantear un proyecto**.
- Talos: revisar un flujo operativo concreto.
- NeuralGraph: probar un repositorio o conjunto de incidentes.
- Mostra: convertir un informe real en un piloto.

### Prueba social

No inventar logos ni métricas. Reunir, en este orden:

1. evidencia de uso;
2. resultado antes/después;
3. cita aprobada;
4. nombre o logo con permiso explícito.

## 10. Plan de 90 días

### Mes 1 · Fundamento

- Publicar la landing.
- Artículo: “Por qué una demo de IA falla cuando llegan los datos reales”.
- Talos: pedido → asignación → ruta.
- Mostra: documento original → experiencia web.

### Mes 2 · Evidencia

- NeuralGraph: primer benchmark trazable, incluidos resultados negativos.
- Talos: alertas de consumo y priorización operativa.
- Mostra: patrones narrativos para reporting ejecutivo.

### Mes 3 · Conversación

- Abrir un programa de design partners por producto.
- Publicar una sesión de construcción o teardown al mes.
- Crear páginas individuales cuando exista suficiente evidencia propia.

## 11. Métricas

### Marca madre

- Conversaciones cualificadas iniciadas desde la web.
- Porcentaje de visitantes que llega a la cartera.
- Respuestas directas a piezas editoriales.

### Talos

- Semanas operadas y usuarios activos.
- Tiempo de planificación y excepciones manuales.
- Uso y corrección de recomendaciones.

### NeuralGraph

- Graph lift frente a vector-only.
- Precisión de citas y abstención correcta.
- Repositorios probados y repetición de uso.

### Mostra

- Outputs con datos reales.
- Outputs aceptados sin edición estructural.
- Repetición después de tres presentaciones.

## 12. Accesibilidad y producción

- Contraste mínimo de texto: 4,5:1.
- Foco visible en todos los controles.
- El movimiento respeta `prefers-reduced-motion`.
- La landing no requiere JavaScript ni proceso de compilación.
- La página debe funcionar desde un servidor estático.

## 13. Pendientes antes de publicar

- Confirmar `hola@coraldatalab.com`.
- Confirmar si Barcelona debe figurar como sede o solo como origen.
- Crear archivos maestros del logotipo y favicon.
- Alojar las fuentes en el dominio propio.
- Preparar metadatos sociales y una imagen Open Graph.
- Añadir privacidad y aviso legal.
- Definir licencia y canal público de NeuralGraph antes de enlazarlo.
- Seleccionar tres ejemplos publicables de Mostra.
- Obtener permiso para publicar el caso y resultados de Talos.

## 14. Estructura del proyecto

```text
web/
├── README.md    estrategia, marca, contenido y reglas
├── index.html   landing corporativa
├── tokens.css   variables y roles visuales
└── styles.css   composición responsive y componentes
```

Para revisar la landing, abre `index.html` o sirve el directorio con cualquier servidor HTTP estático.

## 15. Landing de NeuralGraph

La ruta `/neuralgraph/` tiene HTML y metadatos SEO propios. Antes de publicarla:

1. Configurar en Typeform la redirección final a `https://coraldatalab.com/neuralgraph/gracias/`.
2. Confirmar que el dominio está creado en Plausible o sustituir la integración analítica.
3. Completar en la política de privacidad el nombre legal completo, NIF y domicilio del responsable.

La campaña añade `utm_source=coraldatalab`, `utm_medium=website`,
`utm_campaign=neuralgraph_research_preview` y distingue cada CTA con `utm_content`.
También rellena los campos ocultos de Typeform `source`, `campaign`,
`audience_segment` y `message_variant`.
Los eventos disponibles son `visit`, `survey_start` y `survey_complete`.
