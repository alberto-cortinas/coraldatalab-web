import { numberLabel } from '../content.js'

const motifParts = {
  routes: 4,
  graph: 5,
  story: 3,
}

export function ProductCard({ product, index }) {
  return (
    <article className={`product product--${product.motif}`}>
      <div className="product__index">{numberLabel(index)}</div>
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
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className={`product__motif motif-${product.motif}`} aria-hidden="true">
        {Array.from({ length: motifParts[product.motif] }, (_, part) => (
          <span key={part} />
        ))}
      </div>
    </article>
  )
}
