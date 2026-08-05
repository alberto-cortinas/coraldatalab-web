import { Check, Network, PanelsTopLeft, Route } from 'lucide-react'
import { numberLabel } from '../content.js'

const productIcons = {
  routes: Route,
  graph: Network,
  story: PanelsTopLeft,
}

export function ProductCard({ product, index }) {
  const ProductIcon = productIcons[product.motif]

  return (
    <article className={`product product--${product.motif}`}>
      <div className="product__top">
        <span className="product__index">{numberLabel(index)}</span>
        <span className="product__icon" aria-hidden="true"><ProductIcon /></span>
      </div>
      <div className="product__title">
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
    </article>
  )
}
