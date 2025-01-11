import React, { useContext } from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'
import Loading from '../Loading/Loading'
import { MyContext } from '../../context/context'

function Products() {
  const { products, isFetching } = useContext(MyContext);
  return (
    <div className={style.products}>
      {
        isFetching ? <Loading /> :
          products.map((product) => {
            return <Product key={product.id} product={product} />
          })
      }
    </div>
  )
}

export default Products