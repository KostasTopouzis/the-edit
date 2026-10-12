// import { useState } from 'react'
// import './App.css'
import { productSeeds } from '../Seed.js'
import Product from './Product.jsx'



function ProductList() {
//   const [count, setCount] = useState(0)

const myProducts = productSeeds.map((product) => (
    <Product 
    key={'product-' + product.productId}
    id={product.productId}
    imgSrc={product.imgSrc}
    productName={product.productName}
    description={product.description}
    price={product.price}
    currency={product.currency}
    />
    )
);

  return (
    <div>
        {myProducts}
    </div>
  )
}

export default ProductList
