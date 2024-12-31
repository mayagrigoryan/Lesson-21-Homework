import Basket from './Basket'
import OrderForm from '../OrderForm/OrderForm'
import style from './BasketProduct.module.css'

function BasketProduct({ basket, changeBasket, totalPrice, removeFromBasket }) {
  return (
    <div>
      {
        basket.map((product) => {
          return <Basket removeFromBasket={removeFromBasket} product={product} key={product.id} changeBasket={changeBasket} />
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