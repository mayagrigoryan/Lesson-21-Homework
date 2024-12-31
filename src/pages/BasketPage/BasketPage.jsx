import React from 'react'
import BasketProduct from '../../components/BasketProduct/BasketProduct'
import { Navigate } from 'react-router-dom'

function BasketPage({ basket, changeBasket, totalPrice, removeFromBasket }) {
  return (
    <div>
      {
        basket.length === 0
        ?
        <Navigate to='/'/>
        :
        <BasketProduct removeFromBasket={removeFromBasket} totalPrice={totalPrice} basket={basket} changeBasket={changeBasket}/>
      }
    </div>
  )
}

export default BasketPage