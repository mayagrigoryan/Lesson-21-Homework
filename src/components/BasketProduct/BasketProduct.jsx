import Basket from '../Basket/Basket'

function BasketProduct({basket, changeBasket}) {
  return (
    <div>
      {
        basket.map((product) => {
          return <Basket product={product} key={product.id} changeBasket={changeBasket}/>
        })
      }
    </div>
  )
}

export default BasketProduct