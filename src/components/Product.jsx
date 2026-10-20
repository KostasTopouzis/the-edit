import { translations } from '../i18n.js';
import '../css/Product.css';

const currencyCodes = { $: 'USD', '€': 'EUR' };

function Product({ imgSrc, productName, description, price, currency, language }) {
  const t = translations[language];
  const formattedPrice = new Intl.NumberFormat(t.locale, {
    style: 'currency',
    currency: currencyCodes[currency] ?? currency,
  }).format(price);

  return (
    <article className="product-card">
      <a aria-label={t.viewProduct(productName)} className="product-image" href="#products">
        <img alt={productName} loading="lazy" src={imgSrc} />
        <span className="product-image-action">{t.productAction}</span>
      </a>
      <div className="product-info">
        <div>
          <h3>{productName}</h3>
          <p>{description}</p>
        </div>
        <span className="product-price">{formattedPrice}</span>
      </div>
    </article>
  );
}

export default Product;
