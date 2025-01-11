import { useContext } from 'react';
import { MyContext } from '../../context/context';
import Basket from './Basket'
import OrderForm from '../OrderForm/OrderForm'
import style from './BasketProduct.module.css'

function BasketProduct() {
  const { basket, totalPrice } = useContext(MyContext);
  return (
    <div>
      {
        basket.map((product) => {
          return <Basket product={product} key={product.id} />
        })
      }
      {
        totalPrice ? <p className={style.totalPrice}>Total Price: {totalPrice.toFixed(2)}$</p> : ''
      }
      <OrderForm />
    </div>
  )
}

export default BasketProduct