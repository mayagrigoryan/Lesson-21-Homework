import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MyContext } from './context/context.jsx';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import BasketPage from './pages/BasketPage/BasketPage';
import ProductPage from './pages/ProductPage/ProductPage';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [users, setUsers] = useState([
    { id: '1', name: 'Mary', email: 'mary@gmail.com', password: '1234' },
    { id: '2', name: 'Ann', email: 'ann@gmail.com', password: '1234' },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const localStorageRef = useRef(false);

  useEffect(() => {
    if (localStorageRef.current) {
      localStorage.setItem('basket', JSON.stringify(basket));
    }
    localStorageRef.current = true;
  }, [basket]);

  useEffect(() => {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (user !== null) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    setIsFetching(true);
    instance.get('/products')
      .then((res) => {
        setProducts(res.data.map((el) => ({
          ...el,
          count: 1,
          cartPrice: el.price,
        })));
        setIsFetching(false);
      });
  }, []);

  const totalPrice = basket.reduce((accum, el) => accum + el.cartPrice, 0);

  const addUsers = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const loading = (is) => {
    setIsFetching(is);
  };

  const addToBasket = (product) => {
    let isProductInBasket = true;

    basket.forEach((el) => {
      if (el.id === product.id) {
        isProductInBasket = false;
        setBasket(basket.map((el) => (
          el.id === product.id ? {
            ...el,
            count: el.count + 1,
            cartPrice: el.cartPrice + el.price,
          } : el
        )));
      }
    });

    if (isProductInBasket) {
      setBasket((prev) => [...prev, product]);
    }
  };

  const changeBasket = (count, id) => {
    setBasket(basket.map((el) => (
      el.id === id ? { ...el, count, cartPrice: el.price * count } : el
    )));
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter((el) => el.id !== id));
  };

  return (
    <MyContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      basket,
      isFetching,
      products,
      addToBasket,
      removeFromBasket,
      totalPrice,
      changeBasket,
      loading,
      users,
      addUsers,
      user,
      setUser,
    }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/:id' element={<ProductPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
