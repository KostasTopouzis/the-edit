import { productSeeds } from '../Seed';
import { type Language, translations } from '../i18n';
import Product from './Product';

// Case- and accent-insensitive, so "γλαστρα" matches "Γλάστρα".
function normalizeForSearch(text: string, locale: string) {
  return text.toLocaleLowerCase(locale).normalize('NFD').replace(/\p{M}/gu, '');
}

type ProductListProps = {
  language: Language;
  searchTerm: string;
};

function ProductList({ language, searchTerm }: ProductListProps) {
  const t = translations[language];
  const normalizedSearch = normalizeForSearch(searchTerm.trim(), t.locale);
  const filteredProducts = productSeeds.filter((product) =>
    normalizeForSearch(`${product.productName[language]} ${product.description[language]}`, t.locale)
      .includes(normalizedSearch),
  );

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
              productName={product.productName[language]}
              description={product.description[language]}
              language={language}
            />
          ))}
        </div>
      ) : (
        <p className="empty-state">{t.emptyState(searchTerm)}</p>
      )}
    </section>
  );
}

export default ProductList;
