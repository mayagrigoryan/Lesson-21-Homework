import React from 'react'
import BasketProduct from '../../components/BasketProduct/BasketProduct'

function BasketPage({ basket, changeBasket }) {
  return (
    <BasketProduct basket={basket} changeBasket={changeBasket}/>
  )
}

export default BasketPage