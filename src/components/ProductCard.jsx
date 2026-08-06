import { ArrowUpRight, Check } from 'lucide-react'
import { numberLabel } from '../content.js'

const productLinks = {
  NeuralGraph: '/neuralgraph/',
}

export function ProductCard({ product, index }) {
  const productHref = productLinks[product.name]

  return (
    <section className={`product-chapter product-chapter--${product.motif}`} id={product.name.toLowerCase()}>
      <span className="product-chapter__ghost" aria-hidden="true">{numberLabel(index)}</span>
      <div className="product-chapter__meta">
        <span>{numberLabel(index)} / 03 · Producto</span>
        <span>{product.status}</span>
      </div>
      <div className="product-chapter__body">
        <p className="product-chapter__verb">{product.verb}</p>
        <h2>{product.name}</h2>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        {productHref && (
          <a className="product-chapter__link" href={productHref}>
            Explorar {product.name} <ArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
      <ul className="product-chapter__features">
        {product.features.map((feature) => (
          <li key={feature}><Check aria-hidden="true" />{feature}</li>
        ))}
      </ul>
    </section>
  )
}
