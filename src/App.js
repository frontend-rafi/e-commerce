import React from 'react';
import Nav from './components/Nav'

import ProductCart from './components/ProductCart';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';
import Filter from './components/Filter';


function App() {
  return (
    <div className="App">
   <Nav/>
   <Filter/>
 <Routes>
  <Route path="/" element={  <ProductCart/>}/>
  <Route path="/cart" element={  <Cart/>}/>
 </Routes>
    </div>
  );
}

export default App;
