import { useEffect } from 'react'
import {
  ArrowRight,
  Boxes,
  Braces,
  ChartNoAxesCombined,
  CircleDotDashed,
  CloudCog,
  GitBranch,
  Network,
  RefreshCcw,
  ScanSearch,
} from 'lucide-react'
import { Brand } from './components/Brand.jsx'
import {
  neuralGraphContact,
  initAnalytics,
  surveyUrl,
  trackNeuralGraph,
} from './neuralgraph-config.js'

const capabilities = [
  [ScanSearch, 'RAG vectorial, híbrido y GraphRAG.'],
  [CircleDotDashed, 'Generación y almacenamiento de embeddings.'],
  [GitBranch, 'Extracción de entidades y relaciones.'],
  [Network, 'Algoritmos de grafos y detección de comunidades.'],
  [Braces, 'Recuperación con procedencia y explicabilidad.'],
  [RefreshCcw, 'Ingestión incremental y actualización del conocimiento.'],
  [ChartNoAxesCombined, 'Observabilidad, evaluación, coste y latencia.'],
  [CloudCog, 'Despliegue cloud, on-premise o embebido.'],
  [Boxes, 'Core nativo en Rust.'],
]

function ResearchLink({ placement, className = '', children }) {
  const href = surveyUrl(placement)

  return (
    <a
      className={className}
      href={href}
      onClick={() => trackNeuralGraph('survey_start', { placement })}
    >
      {children}
    </a>
  )
}

export function NeuralGraphPage() {
  useEffect(() => {
    initAnalytics()
    trackNeuralGraph('visit', { path: window.location.pathname })
  }, [])

  return (
    <div className="ng-page" id="inicio">
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <header className="ng-header">
        <div className="ng-container ng-header__row">
          <Brand />
          <span className="ng-header__product">/ NeuralGraph</span>
          <a className="ng-header__contact" href={`mailto:${neuralGraphContact}`}>
            Contacto <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="contenido">
        <section className="ng-hero">
          <div className="ng-container ng-hero__grid">
            <div className="ng-hero__copy">
              <span className="ng-status"><i />Research preview · Seeking design partners</span>
              <p className="ng-kicker">NeuralGraph</p>
              <h1>Infrastructure for production RAG and graph intelligence.</h1>
              <p className="ng-hero__lead">
                A Rust-native engine combining RAG, GraphRAG, embeddings and graph
                algorithms in one operational platform.
              </p>
              <div className="ng-actions">
                <ResearchLink placement="hero" className="ng-button ng-button--primary">
                  Participar en la investigación <ArrowRight aria-hidden="true" />
                </ResearchLink>
                <a className="ng-button ng-button--text" href={`mailto:${neuralGraphContact}?subject=NeuralGraph`}>
                  Hablar con el equipo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="ng-section ng-problem">
          <div className="ng-container ng-two-col">
            <p className="ng-section__label">01 / El problema</p>
            <div>
              <h2>Una pila fragmentada es difícil de operar.</h2>
              <p className="ng-copy-large">
                Llevar RAG a producción suele implicar integrar bases vectoriales, motores
                de grafos, pipelines de ingestión, modelos de embeddings y sistemas de
                observabilidad independientes.
              </p>
              <p>NeuralGraph explora una infraestructura unificada para reducir esa fragmentación.</p>
            </div>
          </div>
        </section>

        <section className="ng-section ng-capabilities">
          <div className="ng-container">
            <div className="ng-section-head">
              <p className="ng-section__label">02 / Investigación</p>
              <h2>Capacidades que estamos validando</h2>
            </div>
            <div className="ng-capability-grid">
              {capabilities.map(([Icon, label], index) => (
                <article key={label}>
                  <div><span>{String(index + 1).padStart(2, '0')}</span><Icon aria-hidden="true" /></div>
                  <p>{label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ng-section ng-audience">
          <div className="ng-container ng-two-col">
            <p className="ng-section__label">03 / Para quién</p>
            <div>
              <h2>Equipos que ya conocen el coste de operar RAG.</h2>
              <p className="ng-copy-large">
                AI Platform, Data Platform y Engineering con RAG en piloto o producción
                que necesitan mayor control, rendimiento y mantenibilidad.
              </p>
              <div className="ng-tags" aria-label="Equipos objetivo">
                <span>AI Platform</span><span>Data Platform</span><span>Engineering</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ng-section ng-state">
          <div className="ng-container ng-two-col">
            <p className="ng-section__label">04 / Estado del producto</p>
            <div>
              <h2>Discovery and design.</h2>
              <p className="ng-copy-large">
                NeuralGraph está en fase de descubrimiento y diseño. Estamos entrevistando
                a equipos que operan sistemas de recuperación y GenAI para priorizar los
                problemas correctos.
              </p>
              <p className="ng-state__note">Sin promesas prematuras. La evidencia define el producto.</p>
            </div>
          </div>
        </section>

        <section className="ng-cta">
          <div className="ng-container ng-cta__inner">
            <p className="ng-section__label">Participa</p>
            <h2>¿Trabajas con RAG, GraphRAG o búsqueda basada en IA?</h2>
            <p>
              Comparte tu experiencia en una encuesta de tres minutos y ayúdanos a diseñar
              una infraestructura útil para producción.
            </p>
            <ResearchLink placement="final_cta" className="ng-button ng-button--primary">
              Responder la encuesta <ArrowRight aria-hidden="true" />
            </ResearchLink>
          </div>
        </section>
      </main>

      <footer className="ng-footer">
        <div className="ng-container ng-footer__grid">
          <p>NeuralGraph is a Coral Data Lab initiative.</p>
          <a href={`mailto:${neuralGraphContact}`}>{neuralGraphContact}</a>
          <a href="/privacidad/">Política de privacidad</a>
        </div>
      </footer>
    </div>
  )
}

export function NeuralGraphThanksPage() {
  useEffect(() => {
    initAnalytics()
    trackNeuralGraph('survey_complete', { path: window.location.pathname })
  }, [])

  return (
    <main className="ng-thanks">
      <div className="ng-container">
        <Brand />
        <p className="ng-section__label">Investigación NeuralGraph</p>
        <h1>Gracias por compartir tu experiencia.</h1>
        <p>Tu respuesta nos ayudará a priorizar problemas reales de infraestructura RAG.</p>
        <a className="ng-button ng-button--primary" href="/neuralgraph/">Volver a NeuralGraph</a>
      </div>
    </main>
  )
}
