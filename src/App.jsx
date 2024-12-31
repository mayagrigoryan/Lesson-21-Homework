import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/HomePage/HomePage'
import Layout from './components/Layout/Layout'
import BasketPage from './pages/BasketPage/BasketPage'
import ProductPage from './pages/ProductPage/ProductPage'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'

import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [users, setUsers] = useState([
    {id : '1', name : 'Mary', email : 'mary@gmail.com', password : '1234'},
    {id : '2', name : 'Ann', email : 'ann@gmail.com', password : '1234'}
  ])

  const addUsers = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
  }

  console.log(users);

  const totalPrice = basket.reduce((accum, el) => accum +=el.cartPrice, 0)

  const loading = (is) => {
    setIsFetching(is)
  }

  useEffect(() => {
    setIsFetching(true)
    instance.get('/products')
      .then((res) => {
        setProducts(res.data.map((el) => {
          return {
            ...el,
            count: 1,
            cartPrice: el.price
          }
        }))
        setIsFetching(false)
      })
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
            return el
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

  const changeBasket = (count, id) => {
    setBasket(basket.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          count: count,
          cartPrice: el.price * count
        }
      } else {
        return el
      }
    }))
  }

  const removeFromBasket = (id) => {
    setBasket(basket.filter((el) => el.id !== id))
  }

  return (
    <Routes>
      <Route path='/' element={<Layout basket={basket} />}>
        <Route index element={<HomePage isFetching={isFetching} products={products} addToBasket={addToBasket} />} />
        <Route path='/basket' element={<BasketPage removeFromBasket={removeFromBasket} totalPrice={totalPrice} basket={basket} changeBasket={changeBasket} />} />
        <Route path='/:id' element={<ProductPage addToBasket={addToBasket} loading={loading} isFetching={isFetching}/>}></Route>
        <Route path='/login' element={<Login users={users}/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/register' element={<Register addUsers={addUsers}/>}/>
      </Route>
    </Routes>
  )
}

export default App
