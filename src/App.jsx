import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import axios from 'axios'

const instance = axios.create({
  baseURL : 'https://fakestoreapi.com'
})

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=> {
    instance.get('/products')
      .then((res) => console.log(res.data))
  }, [])

  console.log(products)

  return (
    <div className='container'>
      <Header/>
    </div>
  )
}

export default App
