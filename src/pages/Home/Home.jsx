import React from 'react'
import Products from '../../components/Products/Products'

function Home({products}) {
  return (
    <div>
        <Products products={products}/>
    </div>
  )
}

export default Home