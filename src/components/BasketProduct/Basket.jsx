import React, { useState } from 'react'
import style from './BasketProduct.module.css'

function Basket({ product, changeBasket, removeFromBasket }) {
    let [count, setCount] = useState(product.count)

    const plusCount = () => {
        setCount(++count)
        changeBasket(count, product.id)
    }

    const minusCount = () => {
        if (count > 1) {
            setCount(--count)
            changeBasket(count, product.id)
        }
    }

    return (
        <>
            <div className={style.productWrapper}>
                <img src={product.image} />
                <div className={style.productInfo}>
                    <h1>{product.title}</h1>
                    <div>
                        <button onClick={minusCount}>-</button>
                        <span>{product.count}</span>
                        <button onClick={plusCount}>+</button>
                    </div>
                    <span>{`Total: ${product.cartPrice.toFixed(2)}$`}</span>
                </div>
                <button onClick={() => removeFromBasket(product.id)} className={style.removeProduct}>🗑️</button>
            </div>
        </>
    )
}

export default Basket