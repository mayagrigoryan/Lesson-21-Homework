import React from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'
import Loading from '../Loading/Loading'

function Products({products, addToBasket, isFetching}) {
  return (
    <div className={style.products}>
       {
        isFetching ? <Loading /> :
        products.map((product) => {
            return <Product key={product.id} product={product} addToBasket={addToBasket}/>
        })
       }
    </div>
  )
}

export default Products