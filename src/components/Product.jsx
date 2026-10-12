// import { useState } from 'react'
import '../css/Product.css'

function Product(props) {
//   const [count, setCount] = useState(0)

  return (
    <div>
      <div id="product-img">
        <img src={props.imgSrc}></img>
      </div>
      <div id="header">
        <h1 id="product-name">{props.productName}
        </h1>
        <p id="product-description">{props.description}</p>
      </div>
      <div id="product-details">
        <p id="price-number">{props.price}<span id="price-currency">{props.currency}</span></p>
      </div>
    </div>
  )
}

export default Product
