import React from 'react'
import style from './AddToBasket.module.css'

function AddToBasket({addToBasket, product}) {
  return (
    <button className={style.addToBasket} onClick={() => addToBasket(product)}>Add to Cart</button>
  )
}

export default AddToBasket