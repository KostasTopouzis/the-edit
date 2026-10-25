import Image, { type StaticImageData } from 'next/image';
import { type Language, translations } from '../i18n';
import '../css/Product.css';

const currencyCodes: Record<string, string> = { $: 'USD', '€': 'EUR' };

type ProductProps = {
  imgSrc: StaticImageData;
  productName: string;
  description: string;
  price: number;
  currency: string;
  language: Language;
};

function Product({ imgSrc, productName, description, price, currency, language }: ProductProps) {
  const t = translations[language];
  const formattedPrice = new Intl.NumberFormat(t.locale, {
    style: 'currency',
    currency: currencyCodes[currency] ?? currency,
  }).format(price);

  return (
    <article className="product-card">
      <a aria-label={t.viewProduct(productName)} className="product-image" href="#products">
        <Image
          alt={productName}
          sizes="(max-width: 800px) 50vw, 25vw"
          src={imgSrc}
        />
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
