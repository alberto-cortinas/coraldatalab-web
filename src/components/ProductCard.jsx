import { Check, Network, PanelsTopLeft, Route } from 'lucide-react'
import { numberLabel } from '../content.js'

const motifParts = {
  routes: 4,
  graph: 5,
  story: 3,
}

const productIcons = {
  routes: Route,
  graph: Network,
  story: PanelsTopLeft,
}

export function ProductCard({ product, index }) {
  const ProductIcon = productIcons[product.motif]

  return (
    <article className={`product product--${product.motif}`}>
      <div className="product__index">{numberLabel(index)}</div>
      <div className="product__title">
        <span className="product__icon" aria-hidden="true"><ProductIcon /></span>
        <p className="product__verb">{product.verb}</p>
        <h3>{product.name}</h3>
        <span className="status">
          <i aria-hidden="true" /> {product.status}
        </span>
      </div>
      <div className="product__body">
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <ul className="feature-list">
          {product.features.map((feature) => (
            <li key={feature}><Check aria-hidden="true" />{feature}</li>
          ))}
        </ul>
      </div>
      <div className={`product__motif motif-${product.motif}`} aria-hidden="true">
        <small>{product.verb} · sistema activo</small>
        {Array.from({ length: motifParts[product.motif] }, (_, part) => (
          <span key={part} />
        ))}
      </div>
    </article>
  )
}
