import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'

import axios from 'axios'

const instance = axios.create({
  baseURL : 'https://fakestoreapi.com'
})

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=> {
    instance.get('/products')
      .then((res) => setProducts(res.data))
  }, [])

  console.log(products)

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home products={products}/>}/>
        <Route path='/basket' element={<div>Basket Page</div>}/>
      </Route>
    </Routes>
  )
}

export default App
