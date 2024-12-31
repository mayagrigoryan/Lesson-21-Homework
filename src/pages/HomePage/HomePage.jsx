import React from 'react'
import Products from '../../components/Products/Products'

function HomePage({products, addToBasket, isFetching}) {
  return (
    <div>
        <Products isFetching={isFetching} products={products} addToBasket={addToBasket}/>
    </div>
  )
}

export default HomePage