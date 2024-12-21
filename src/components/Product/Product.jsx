import React from 'react'
import style from './Product.module.css'

function Product({ product, addToBasket }) {
  const titleLength = 20
  return (
    <div className={style.productContainer}>
      <div>
        <h1>{product.title.length >= titleLength ? `${product.title.slice(0, titleLength)}...` : product.title}</h1>
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
      <button onClick={() => addToBasket(product)}>Add to Cart</button>
    </div>
  )
}

export default Product