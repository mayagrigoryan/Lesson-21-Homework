import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Product.module.css'
import AddToBasket from '../AddToBasket/AddToBasket'

function Product({ product, addToBasket }) {
  const titleLength = 20
  return (
    <div className={style.productContainer}>
      <div>
        <h1>{product.title.length >= titleLength ? `${product.title.slice(0, titleLength)}...` : product.title}</h1>
      </div>
      <NavLink to={`${product.id}`}>
        <img src={product.image} alt={product.title} />
      </NavLink>
      <div>
        <span className={style.price}>{product.price}$</span>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
      <AddToBasket product={product} addToBasket={addToBasket}/>
    </div>
  )
}

export default Product