import React from 'react';
import Cart from './components/Cart/Cart'
import Banner from './components/Layout/banner'
import { useState,useRef } from 'react';
import MealsData from './components/Meals/Meals-Data'
import Headers from './components/Layout/Header';
import CartProvider from './store/cart-provider';
import './App.css';

function App() {
  const [initialContent, setCartContent] = useState(false);
  const addCart = function () {
    setCartContent(true);
  }
  const onGoBack = function(){
    setCartContent(false);
  }

  return (
    <CartProvider>
       <Headers onAdd={addCart}></Headers>
      {initialContent ? <Cart onGoBack = {onGoBack}></Cart> : <div>
        <Banner></Banner>
        <MealsData></MealsData>
      </div>}
    </CartProvider>
     




  );
}

export default App;
