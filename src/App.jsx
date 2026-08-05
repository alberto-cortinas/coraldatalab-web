import { Brand } from './components/Brand.jsx'
import { Header } from './components/Header.jsx'
import { ProductCard } from './components/ProductCard.jsx'
import {
  methodSteps,
  numberLabel,
  principles,
  products,
  sourceLabels,
} from './content.js'

const projectHref =
  'mailto:hola@coraldatalab.com?subject=Proyecto%20para%20Coral%20Data%20Lab'

const detailedProjectHref = `${projectHref}&body=El%20problema%20que%20queremos%20resolver%20es%3A%0A%0ALos%20datos%20que%20tenemos%20son%3A%0A%0ALa%20decisi%C3%B3n%20que%20necesitamos%20tomar%20es%3A`

function Hero() {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="t-eyebrow">Productos AI-native · I+D propio</p>
            <h1 className="t-display-xl">
              IA en el ADN<br />del producto.<br /><em>No como una capa.</em>
            </h1>
            <p className="t-lead">
              Diseñamos el modelo, los datos y la experiencia como un único sistema desde
              el origen. No añadimos IA al final sobre software heredado.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#productos">
                Conocer los productos <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href={projectHref}>
                Plantear un proyecto <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="decision-map" aria-label="De datos dispersos a una decisión defendible">
            <div className="decision-map__source">
              {sourceLabels.map((label) => <span key={label}>{label}</span>)}
            </div>
            <div className="decision-map__line" aria-hidden="true" />
            <div className="decision-map__result">
              <span className="t-eyebrow">El resultado</span>
              <strong>Una decisión<br />que se puede<br />defender.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Propuesta de valor">
        <div className="container proof-strip__grid">
          <p><span>01</span> La IA define el producto desde el inicio.</p>
          <p><span>02</span> Datos, modelo y experiencia nacen juntos.</p>
          <p><span>03</span> Diseñamos para los datos de verdad.</p>
        </div>
      </section>
    </>
  )
}

function Products() {
  return (
    <section className="section" id="productos">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="t-eyebrow">Tres productos · una arquitectura AI-native</p>
            <h2 className="t-display-l">La IA no es una función.<br />Es el punto de partida.</h2>
          </div>
          <p className="t-lead">
            Talos, NeuralGraph y Mostra resuelven trabajos distintos. Los tres se
            construyen desde cero alrededor de capacidades que la IA hace posibles.
          </p>
        </div>
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section className="section section--warm" id="enfoque">
      <div className="container thesis">
        <p className="t-eyebrow">Qué significa AI-native</p>
        <blockquote>Un producto AI-native no empieza por añadir un modelo.</blockquote>
        <div className="thesis__grid">
          <p>
            Empieza por replantear el trabajo completo alrededor de lo que la IA permite
            hacer. Ingestión, modelo, recuperación, decisiones e interfaz se diseñan como
            una sola pieza.
          </p>
          <p>
            Así la IA puede comprender el contexto, actuar dentro del flujo real y explicar
            su resultado. No queda aislada en una ventana de chat sobre un producto heredado.
          </p>
        </div>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section className="section" id="principios">
      <div className="container">
        <div className="section-head section-head--compact">
          <div>
            <p className="t-eyebrow">Cómo elegimos</p>
            <h2 className="t-display-l">Principios antes<br />que promesas.</h2>
          </div>
        </div>
        <div className="principles">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span>{numberLabel(index)}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Method() {
  return (
    <section className="section section--ink">
      <div className="container method">
        <div className="method__intro">
          <p className="t-eyebrow">De problema a producto</p>
          <h2 className="t-display-l">Avanzamos solo<br />cuando hay evidencia.</h2>
          <p>
            Validamos primero el riesgo que puede matar el proyecto. Cada etapa termina
            en algo visible y en una decisión clara.
          </p>
        </div>
        <ol className="method__steps">
          {methodSteps.map(([title, description], index) => (
            <li key={title}>
              <span>{numberLabel(index)}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div className="container contact__grid">
        <div>
          <p className="t-eyebrow">Una conversación concreta</p>
          <h2 className="t-display-l">¿Dónde se atasca<br />hoy la decisión?</h2>
        </div>
        <div className="contact__body">
          <p className="t-lead">
            Cuéntanos el problema, qué datos existen y quién necesita decidir. Si no encaja
            con lo que hacemos, también te lo diremos.
          </p>
          <a className="btn btn--primary" href={detailedProjectHref}>
            Escribir a hola@coraldatalab.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-foot">
      <div className="container site-foot__row">
        <Brand footer />
        <p>Barcelona · Trabajamos en remoto</p>
        <p>© 2026 Coral Data Lab</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <Products />
        <Approach />
        <Principles />
        <Method />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
