import {React, useState} from 'react'
import './css/styles.css';
import './css/bootstrap.min.css'
import Layout from './screens/Layout';
import Home from './screens/Home';
import MoreInfo from './screens/MoreInfo';
import Products from './screens/Products';
import Contact from './screens/Contact';
import Cart from './screens/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext, CartProvider } from './components/CartContext';


function App() {
  const [cart, setCart] = useState([])

  return (
    <CartProvider value={[cart, setCart]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/MoreInfo" element={<MoreInfo/>}></Route>
            <Route path="/Products" element={<Products/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="*" element={<h1 style={{color:"#000"}}>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
