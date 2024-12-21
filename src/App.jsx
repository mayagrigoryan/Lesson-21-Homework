import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Layout from './components/Layout/Layout'
import BasketPage from './pages/BasketPage/BasketPage'

import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  useEffect(() => {
    instance.get('/products')
      .then((res) => setProducts(res.data.map((el) => {
        return {
          ...el,
          count: 1,
          cartPrice: el.price
        }
      })))
  }, [])

  const addToBasket = (product) => {
    let isBool = true

    basket.forEach((el) => {
      if (el.id === product.id) {
        isBool = false
        setBasket(basket.map((el) => {
          if (el.id === product.id) {
            return {
              ...el,
              count: ++el.count,
              cartPrice: el.price + el.cartPrice
            }
          } else {
            return basket
          }
        }))
      }
    })

    if (isBool) {
      setBasket((prev) => {
        return [...prev, product]
      })
    }
  }

  console.log(basket)


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage products={products} addToBasket={addToBasket} />} />
        <Route path='/basket' element={<BasketPage basket={basket} />} />
      </Route>
    </Routes>
  )
}

export default App
