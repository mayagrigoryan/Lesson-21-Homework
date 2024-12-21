import React from 'react'
import style from './BasketProduct.module.css'

function BasketProduct({basket}) {
  return (
    <div>
      {
        basket.map((product) => {
          return <>
            <div key={product.id} className={style.productWrapper}>
              <img src={product.image} />
              <div className={style.productInfo}>
                <h1>{product.title}</h1>
                <div>
                  <button>-</button>
                  <span>{product.count}</span>
                  <button>+</button>
                </div>
                <span>{`Total: ${product.cartPrice}$`}</span>
              </div>
            </div>
          </>
        })
      }
    </div>
  )
}

export default BasketProduct