import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Brand } from './components/Brand.jsx'
import { methodSteps, principles, products } from './content.js'
import { fBlockElements, mainElements } from './periodic-elements.js'

const contactHref =
  'mailto:hola@coraldatalab.com?subject=Proyecto%20para%20Coral%20Data%20Lab'

const productMeta = {
  NeuralGraph: {
    symbol: 'Ne',
    number: 10,
    color: 'neuralgraph',
    action: 'Explorar NeuralGraph',
    href: '/neuralgraph/',
  },
  Mostra: {
    symbol: 'Mo',
    number: 42,
    color: 'mostra',
    action: 'Hablar sobre Mostra',
    href: 'mailto:hola@coraldatalab.com?subject=Mostra',
  },
  Talos: {
    symbol: 'Ta',
    number: 73,
    color: 'talos',
    action: 'Hablar sobre Talos',
    href: 'mailto:hola@coraldatalab.com?subject=Talos',
  },
}

const productByName = Object.fromEntries(products.map((product) => [product.name, product]))

function SiteRail({ activeView, onSelectView }) {
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
      <div className="site-rail__bottom">
        <nav className="site-rail__editorial" aria-label="Contenido editorial">
          <button
            type="button"
            aria-pressed={activeView === 'principles'}
            onClick={() => onSelectView('principles')}
          >
            Principios →
          </button>
          <button
            type="button"
            aria-pressed={activeView === 'method'}
            onClick={() => onSelectView('method')}
          >
            Cómo trabajamos →
          </button>
        </nav>
        <div className="site-rail__utilities">
          <span>Barcelona · Remoto</span>
          <a href={contactHref}>Hablemos →</a>
        </div>
      </div>
    </aside>
  )
}

function ElementCell({ element, selectedName, onSelect }) {
  const [number, symbol, column, row, productName] = element
  const style = { gridColumn: column, gridRow: row }

  if (!productName) {
    return (
      <span className="periodic-element" style={style} aria-hidden="true">
        <span>{number}</span>
        <strong>{symbol}</strong>
      </span>
    )
  }

  const meta = productMeta[productName]
  return (
    <button
      type="button"
      className={`periodic-element periodic-element--product periodic-element--${meta.color}`}
      style={style}
      aria-label={`Mostrar ${productName}`}
      aria-pressed={selectedName === productName}
      onClick={() => onSelect(productName)}
    >
      <span>{number}</span>
      <strong>{symbol}</strong>
      <small>{productName}</small>
    </button>
  )
}

function PeriodicTable({ selectedName, onSelect }) {
  return (
    <div className="periodic-system" aria-label="Sistema periódico de productos">
      <div className="periodic-system__body">
        <div className="periodic-system__main">
          {mainElements.map((element) => (
            <ElementCell
              key={element[0]}
              element={element}
              selectedName={selectedName}
              onSelect={onSelect}
            />
          ))}
        </div>
        <div className="periodic-system__f-block">
          <span className="periodic-system__f-label" aria-hidden="true">f</span>
          <div className="periodic-system__f-grid">
            {fBlockElements.map((element) => (
              <ElementCell
                key={element[0]}
                element={element}
                selectedName={selectedName}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileProductSelector({ selectedName, onSelect }) {
  return (
    <div className="mobile-product-selector" aria-label="Seleccionar producto">
      {products.map((product) => {
        const meta = productMeta[product.name]
        return (
          <button
            key={product.name}
            type="button"
            className={`mobile-product-selector__item mobile-product-selector__item--${meta.color}`}
            aria-pressed={selectedName === product.name}
            onClick={() => onSelect(product.name)}
          >
            <strong>{meta.symbol}</strong>
            <small>{product.name}</small>
          </button>
        )
      })}
    </div>
  )
}

function ProductDetail({ name }) {
  const product = productByName[name]
  const meta = productMeta[name]

  return (
    <article className={`product-detail product-detail--${meta.color}`}>
      <p className="product-detail__meta">{product.verb} · {product.status}</p>
      <h2>{product.name}</h2>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <a href={meta.href}>
        {meta.action} <ArrowUpRight aria-hidden="true" />
      </a>
      <span className="product-detail__symbol" aria-hidden="true">{meta.symbol}</span>
    </article>
  )
}

function EditorialDetail({ view }) {
  const isPrinciples = view === 'principles'
  const items = isPrinciples
    ? principles.map(({ title, description }) => [title, description])
    : methodSteps

  return (
    <article className="editorial-detail">
      <p className="editorial-detail__meta">
        {isPrinciples ? 'Principios · Coral Data Lab' : 'Del problema al producto'}
      </p>
      <h2>{isPrinciples ? 'Lo que creemos define lo que construimos.' : 'Avanzamos solo cuando hay evidencia.'}</h2>
      <p className="editorial-detail__lead">
        {isPrinciples
          ? 'Decisiones de producto y tecnología, no promesas corporativas.'
          : 'Cada etapa termina en algo visible y en una decisión clara.'}
      </p>
      <ol>
        {items.map(([title, description], index) => (
          <li key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
          </li>
        ))}
      </ol>
    </article>
  )
}

function ProductSystem({ activeView, onSelectView }) {
  const selectedName = productByName[activeView] ? activeView : null
  const editorialView = activeView === 'principles' || activeView === 'method' ? activeView : null
  const hasSelection = Boolean(activeView)

  const status = selectedName
    ? `Producto seleccionado · ${productMeta[selectedName].symbol}`
    : editorialView === 'principles'
      ? 'Principios · Coral Data Lab'
      : editorialView === 'method'
        ? 'Cómo trabajamos · Coral Data Lab'
        : 'Sistema de productos'

  return (
    <main className={`product-stage${hasSelection ? ' product-stage--selected' : ''}`} id="productos">
      <div className="product-stage__top">
        <span>{status}</span>
        <button type="button" onClick={() => onSelectView(null)}>
          ← Volver al sistema
        </button>
      </div>

      {!hasSelection && (
        <div className="product-stage__table">
          <div className="product-stage__heading">
            <h2>Conócenos por lo que construimos.</h2>
            <p>Tres productos para tres problemas concretos. Selecciona un elemento y descubre cómo los abordamos.</p>
          </div>
          <PeriodicTable selectedName={selectedName} onSelect={onSelectView} />
          <MobileProductSelector selectedName={selectedName} onSelect={onSelectView} />
        </div>
      )}

      {selectedName && <ProductDetail name={selectedName} />}
      {editorialView && <EditorialDetail view={editorialView} />}
    </main>
  )
}

export default function App() {
  const [activeView, setActiveView] = useState(null)

  return (
    <>
      <a className="skip" href="#productos">Saltar a los productos</a>
      <div className="site-layout" id="inicio">
        <SiteRail activeView={activeView} onSelectView={setActiveView} />
        <ProductSystem activeView={activeView} onSelectView={setActiveView} />
      </div>
    </>
  )
}
