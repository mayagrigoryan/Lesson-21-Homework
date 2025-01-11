import React, { useContext } from 'react'
import BasketProduct from '../../components/BasketProduct/BasketProduct'
import { Navigate } from 'react-router-dom'
import { MyContext } from '../../context/context'

function BasketPage() {
  const { basket } = useContext(MyContext);
  return (
    <div>
      {
        basket.length === 0
        ?
        <Navigate to='/'/>
        :
        <BasketProduct />
      }
    </div>
  )
}

export default BasketPage