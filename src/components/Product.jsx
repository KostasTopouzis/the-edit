import '../css/Product.css'

function Product({ imgSrc, productName, description, price, currency }) {
  const formattedPrice =
    currency === '$' ? `${currency}${price.toFixed(2)}` : `${price.toFixed(2)} ${currency}`

  return (
    <article className="product-card">
      <a aria-label={`View ${productName}`} className="product-image" href="#products">
        <img alt={productName} loading="lazy" src={imgSrc} />
        <span className="product-image-action">DISCOVER</span>
      </a>
      <div className="product-info">
        <div>
          <h3>{productName}</h3>
          <p>{description}</p>
        </div>
        <span className="product-price">{formattedPrice}</span>
      </div>
    </article>
  )
}

export default Product
