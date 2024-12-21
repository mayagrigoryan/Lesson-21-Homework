import React from 'react'
import style from './Product.module.css'

function Product({ product }) {
  return (
    <div className={style.productContainer}>
      <div>
        <h1>{product.title}</h1>
      </div>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <span className={style.price}>{product.price}$</span>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product