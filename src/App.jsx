import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Brand } from './components/Brand.jsx'
import { fBlockElements, mainElements } from './periodic-elements.js'
import {
  currentSiteLanguage,
  siteCopy,
  siteLanguageLabels,
  siteLanguagePaths,
} from './site-i18n.js'

const contactHref =
  'mailto:hola@coraldatalab.com?subject=Proyecto%20para%20Coral%20Data%20Lab'

const baseProductMeta = {
  NeuralGraph: {
    symbol: 'Ne',
    number: 10,
    color: 'neuralgraph',
  },
  Mostra: {
    symbol: 'Mo',
    number: 42,
    color: 'mostra',
    href: 'mailto:hola@coraldatalab.com?subject=Mostra',
  },
  Talos: {
    symbol: 'Ta',
    number: 73,
    color: 'talos',
    href: 'mailto:hola@coraldatalab.com?subject=Talos',
  },
}

const neuralGraphPaths = { es: '/neuralgraph/', ca: '/neuralgraph/ca/', en: '/neuralgraph/en/' }

function SiteRail({ activeView, onSelectView, copy, language }) {
  return (
    <aside className="site-rail">
      <Brand href={siteLanguagePaths[language]} />
      <span className="site-rail__ghost" aria-hidden="true">AI</span>
      <div className="site-rail__statement">
        <p className="t-eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title.map((line, index) => <span key={line}>{line}{index < copy.title.length - 1 && <br />}</span>)}</h1>
        <p>{copy.lead}</p>
      </div>
      <div className="site-rail__bottom">
        <nav className="site-rail__editorial" aria-label={copy.editorialNav}>
          <button
            type="button"
            aria-pressed={activeView === 'principles'}
            onClick={() => onSelectView('principles')}
          >
            {copy.principlesLink} →
          </button>
          <button
            type="button"
            aria-pressed={activeView === 'method'}
            onClick={() => onSelectView('method')}
          >
            {copy.methodLink} →
          </button>
        </nav>
        <div className="site-rail__utilities">
          <nav className="site-languages" aria-label={copy.languageNav}>
            {Object.entries(siteLanguagePaths).map(([code, path]) => (
              <a key={code} href={path} hrefLang={code} aria-current={code === language ? 'page' : undefined}>
                {siteLanguageLabels[code]}
              </a>
            ))}
          </nav>
          <span>{copy.location}</span>
          <a href={contactHref}>{copy.contact} →</a>
        </div>
      </div>
    </aside>
  )
}

function ElementCell({ element, selectedName, onSelect, copy }) {
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

  const meta = baseProductMeta[productName]
  return (
    <button
      type="button"
      className={`periodic-element periodic-element--product periodic-element--${meta.color}`}
      style={style}
      aria-label={`${copy.showProduct} ${productName}`}
      aria-pressed={selectedName === productName}
      onClick={() => onSelect(productName)}
    >
      <span>{number}</span>
      <strong>{symbol}</strong>
      <small>{productName}</small>
    </button>
  )
}

function PeriodicTable({ selectedName, onSelect, copy }) {
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
              copy={copy}
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
                copy={copy}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileProductSelector({ selectedName, onSelect, copy }) {
  return (
    <div className="mobile-product-selector" aria-label={copy.selectProduct}>
      {copy.products.map((product) => {
        const meta = baseProductMeta[product.name]
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

function ProductDetail({ name, copy, language }) {
  const product = copy.products.find((item) => item.name === name)
  const meta = baseProductMeta[name]
  const href = name === 'NeuralGraph' ? neuralGraphPaths[language] : meta.href

  return (
    <article className={`product-detail product-detail--${meta.color}`}>
      <p className="product-detail__meta">{product.verb} · {product.status}</p>
      <h2>{product.name}</h2>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <a href={href}>
        {copy.productActions[name]} <ArrowUpRight aria-hidden="true" />
      </a>
      <span className="product-detail__symbol" aria-hidden="true">{meta.symbol}</span>
    </article>
  )
}

function EditorialDetail({ view, copy }) {
  const isPrinciples = view === 'principles'
  const items = isPrinciples
    ? copy.principles.map(({ title, description }) => [title, description])
    : copy.methodSteps

  return (
    <article className="editorial-detail">
      <p className="editorial-detail__meta">
        {isPrinciples ? copy.principlesMeta : copy.methodMeta}
      </p>
      <h2>{isPrinciples ? copy.principlesTitle : copy.methodTitle}</h2>
      <p className="editorial-detail__lead">
        {isPrinciples ? copy.principlesLead : copy.methodLead}
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

function ProductSystem({ activeView, onSelectView, copy, language }) {
  const productByName = Object.fromEntries(copy.products.map((product) => [product.name, product]))
  const selectedName = productByName[activeView] ? activeView : null
  const editorialView = activeView === 'principles' || activeView === 'method' ? activeView : null
  const hasSelection = Boolean(activeView)

  const status = selectedName
    ? `${copy.selectedLabel} · ${baseProductMeta[selectedName].symbol}`
    : editorialView === 'principles'
      ? copy.principlesMeta
      : editorialView === 'method'
        ? `${copy.methodLink} · Coral Data Lab`
        : copy.systemLabel

  return (
    <main className={`product-stage${hasSelection ? ' product-stage--selected' : ''}`} id="productos">
      <div className="product-stage__top">
        <span>{status}</span>
        <button type="button" onClick={() => onSelectView(null)}>
          ← {copy.back}
        </button>
      </div>

      {!hasSelection && (
        <div className="product-stage__table">
          <div className="product-stage__heading">
            <h2>{copy.heading}</h2>
            <p>{copy.headingLead}</p>
          </div>
          <PeriodicTable selectedName={selectedName} onSelect={onSelectView} copy={copy} />
          <MobileProductSelector selectedName={selectedName} onSelect={onSelectView} copy={copy} />
        </div>
      )}

      {selectedName && <ProductDetail name={selectedName} copy={copy} language={language} />}
      {editorialView && <EditorialDetail view={editorialView} copy={copy} />}
    </main>
  )
}

export default function App() {
  const [activeView, setActiveView] = useState(null)
  const language = currentSiteLanguage()
  const copy = siteCopy[language]

  return (
    <>
      <a className="skip" href="#productos">{copy.skip}</a>
      <div className="site-layout" id="inicio">
        <SiteRail activeView={activeView} onSelectView={setActiveView} copy={copy} language={language} />
        <ProductSystem activeView={activeView} onSelectView={setActiveView} copy={copy} language={language} />
      </div>
    </>
  )
}
