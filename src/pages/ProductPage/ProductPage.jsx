import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../App'

import style from './ProductPage.module.css'
import Loading from '../../components/Loading/Loading'
import AddToBasket from '../../components/AddToBasket/AddToBasket'
import { MyContext } from '../../context/context'

function ProductPage() {
    const { isFetching, loading } = useContext(MyContext);
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        loading(true)
        instance.get(`/products/${id}`)
            .then((res) => {
                const newProduct = {...res.data, count : 1, cartPrice : res.data.price}
                setProduct(newProduct)
                loading(false)
            })
    }, [id])
    return (
        <div>
            {
                isFetching ? <Loading /> : <div className={style.productPage}>
                    <img src={product?.image} alt="" />
                    <div className={style.productInfo}>
                        <h1>{product?.title}</h1>
                        <p>{product?.description}</p>
                        <div>
                            <span>{product?.price}$</span>
                            <AddToBasket product={product}/>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default ProductPage