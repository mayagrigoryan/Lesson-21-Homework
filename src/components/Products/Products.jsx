import React from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'

function Products({products, addToBasket}) {
  return (
    <div className={style.products}>
       {
        products.map((product) => {
            return <Product key={product.id} product={product} addToBasket={addToBasket}/>
        })
       }
    </div>
  )
}

export default Products