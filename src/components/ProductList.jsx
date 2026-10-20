import { productSeeds } from '../Seed.js'
import { translations } from '../i18n.js'
import Product from './Product.jsx'

// Case- and accent-insensitive, so "μασκαρα" matches "Μάσκαρα".
function normalizeForSearch(text, locale) {
  return text.toLocaleLowerCase(locale).normalize('NFD').replace(/\p{M}/gu, '')
}

function ProductList({ language, searchTerm }) {
  const t = translations[language]
  const normalizedSearch = normalizeForSearch(searchTerm.trim(), t.locale)
  const filteredProducts = productSeeds.filter((product) =>
    normalizeForSearch(`${product.productName} ${product.description[language]}`, t.locale)
      .includes(normalizedSearch),
  )

  return (
    <section aria-labelledby="products-title" className="product-section" id="products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t.productsEyebrow}</p>
          <h2 id="products-title">{t.productsTitle}</h2>
        </div>
        <p className="product-count">{t.productCount(filteredProducts.length)}</p>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Product
              key={`product-${product.productId}`}
              {...product}
              description={product.description[language]}
              language={language}
            />
          ))}
        </div>
      ) : (
        <p className="empty-state">{t.emptyState(searchTerm)}</p>
      )}
    </section>
  )
}

export default ProductList
