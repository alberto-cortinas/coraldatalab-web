import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Brand } from './components/Brand.jsx'
import { products } from './content.js'
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
      <div className="site-rail__utilities">
        <span>Barcelona · Remoto</span>
        <a href={contactHref}>Hablemos →</a>
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
      <div className="periodic-system__group-axis" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => <span key={index}>{index + 1}</span>)}
      </div>
      <div className="periodic-system__period-axis" aria-hidden="true">
        {Array.from({ length: 7 }, (_, index) => <span key={index}>{index + 1}</span>)}
      </div>
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

function ProductSystem() {
  const [selectedName, setSelectedName] = useState(null)

  return (
    <main className={`product-stage${selectedName ? ' product-stage--selected' : ''}`} id="productos">
      <div className="product-stage__top">
        <span>{selectedName ? `Producto seleccionado · ${productMeta[selectedName].symbol}` : 'Sistema de productos'}</span>
        <button type="button" onClick={() => setSelectedName(null)}>
          ← Volver al sistema
        </button>
      </div>

      {!selectedName && (
        <div className="product-stage__table">
          <div className="product-stage__heading">
            <h2>Conócenos por lo que construimos.</h2>
            <p>Tres productos para tres problemas concretos. Selecciona un elemento y descubre cómo los abordamos.</p>
          </div>
          <PeriodicTable selectedName={selectedName} onSelect={setSelectedName} />
          <MobileProductSelector selectedName={selectedName} onSelect={setSelectedName} />
        </div>
      )}

      {selectedName && <ProductDetail name={selectedName} />}
    </main>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#productos">Saltar a los productos</a>
      <div className="site-layout" id="inicio">
        <SiteRail />
        <ProductSystem />
      </div>
    </>
  )
}
