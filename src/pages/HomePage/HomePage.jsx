import React from 'react'
import Products from '../../components/Products/Products'

function HomePage({products, addToBasket}) {
  return (
    <div>
        <Products products={products} addToBasket={addToBasket}/>
    </div>
  )
}

export default HomePage