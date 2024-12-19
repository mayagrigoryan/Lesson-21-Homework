import React from 'react'
import style from './Product.module.css'

function Product({ product }) {
  return (
    <div className={style.productContainer}>
      <div className={style.productInfo}>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <span className={style.price}>{product.price}$</span>
        <p>{product.description}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product