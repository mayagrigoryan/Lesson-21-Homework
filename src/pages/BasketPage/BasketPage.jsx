import React from 'react'
import BasketProduct from '../../components/BasketProduct/BasketProduct'

function BasketPage({ basket }) {
  return (
    <BasketProduct basket={basket}/>
  )
}

export default BasketPage