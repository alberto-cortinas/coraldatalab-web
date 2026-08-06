import { ArrowUpRight } from 'lucide-react'
import { Brand } from './components/Brand.jsx'
import { ProductCard } from './components/ProductCard.jsx'
import { methodSteps, principles, products } from './content.js'

const projectHref =
  'mailto:hola@coraldatalab.com?subject=Proyecto%20para%20Coral%20Data%20Lab'

const detailedProjectHref = `${projectHref}&body=El%20problema%20que%20queremos%20resolver%20es%3A%0A%0ALos%20datos%20que%20tenemos%20son%3A%0A%0ALa%20decisi%C3%B3n%20que%20necesitamos%20tomar%20es%3A`

function SiteRail() {
  return (
    <aside className="site-rail">
      <Brand />
      <span className="site-rail__ghost" aria-hidden="true">AI</span>
      <div className="site-rail__statement">
        <p className="t-eyebrow">Coral Data Lab · Productos AI-native</p>
        <h1>Inteligencia Artificial<br />en el ADN<br />del producto.</h1>
        <p>
          Diseñamos el modelo, los datos y la experiencia como un único sistema desde
          el origen. No añadimos IA como una capa sobre software heredado.
        </p>
      </div>
      <nav className="site-rail__editorial" aria-label="Contenido editorial">
        <a href="#principios">Principios →</a>
        <a href="#metodo">Cómo trabajamos →</a>
      </nav>
      <div className="site-rail__utilities">
        <span>Barcelona · Remoto</span>
        <a href={projectHref}>Hablemos →</a>
      </div>
    </aside>
  )
}

function ProductIndex() {
  return (
    <section className="product-index-panel" aria-label="Índice de productos">
      <div className="product-index-panel__top">
        <span>03 productos · Un sistema</span>
        <span>Selecciona un producto ↓</span>
      </div>
      <div className="product-index-panel__feature product-index-panel__feature--neutral">
        <div>
          <p>Productos AI-native</p>
          <h2>Queremos que nos conozcas a través de nuestro trabajo.</h2>
          <p>Selecciona uno de los productos para descubrir el problema que aborda, cómo lo estamos construyendo y en qué estado se encuentra.</p>
        </div>
      </div>
      <nav className="product-index-list" aria-label="Productos">
        {products.map((product, index) => (
          <a key={product.name} href={`#${product.name.toLowerCase()}`}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{product.name}</strong>
            <small>Producto</small>
          </a>
        ))}
      </nav>
      <div className="product-index-panel__editorial">
        <a href="#principios">Principios →</a>
        <span aria-disabled="true">Notas del laboratorio →</span>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section className="editorial-panel" id="principios">
      <div className="editorial-panel__intro">
        <p className="t-eyebrow">Principios · Coral Data Lab</p>
        <h2>Lo que creemos define lo que construimos.</h2>
        <p>Decisiones de producto y tecnología, no promesas corporativas.</p>
      </div>
      <div className="principle-list">
        {principles.map((principle, index) => (
          <article key={principle.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Method() {
  return (
    <section className="method-panel" id="metodo">
      <div className="method-panel__intro">
        <p className="t-eyebrow">Del problema al producto</p>
        <h2>Avanzamos solo cuando hay evidencia.</h2>
        <p>Cada etapa termina en algo visible y en una decisión clara.</p>
      </div>
      <ol>
        {methodSteps.map(([title, description], index) => (
          <li key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function StreamFooter() {
  return (
    <footer className="stream-footer">
      <div>
        <p className="t-eyebrow">Una conversación concreta</p>
        <h2>¿Dónde se atasca hoy la decisión?</h2>
        <p>Cuéntanos el problema, los datos disponibles y quién necesita decidir.</p>
      </div>
      <a href={detailedProjectHref}>
        hola@coraldatalab.com <ArrowUpRight aria-hidden="true" />
      </a>
      <div className="stream-footer__meta">
        <span>© 2026 Coral Data Lab</span>
        <a href="/privacidad/">Privacidad</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#productos">Saltar a los productos</a>
      <div className="site-layout" id="inicio">
        <SiteRail />
        <main className="site-stream" id="productos">
          <ProductIndex />
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
          <Principles />
          <Method />
          <StreamFooter />
        </main>
      </div>
    </>
  )
}
