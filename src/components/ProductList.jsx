import { productSeeds } from '../Seed.js'
import Product from './Product.jsx'

function ProductList({ searchTerm }) {
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredProducts = productSeeds.filter((product) =>
    `${product.productName} ${product.description}`
      .toLowerCase()
      .includes(normalizedSearch),
  )

  return (
    <section aria-labelledby="products-title" className="product-section" id="products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CURATED FOR YOU</p>
          <h2 id="products-title">The latest finds</h2>
        </div>
        <p className="product-count">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'FIND' : 'FINDS'}
        </p>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Product key={`product-${product.productId}`} {...product} />
          ))}
        </div>
      ) : (
        <p className="empty-state">No products match “{searchTerm}”. Try another search.</p>
      )}
    </section>
  )
}

export default ProductList
