import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
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
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Products products={products}/>}></Route>
        <Route path='/basket'/>
      </Routes>
    </div>
  )
}

export default App
