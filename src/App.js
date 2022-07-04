import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Register from "../src/pages/Register"

import Login from './pages/Login';
import ProductDetails from './components/ProductDetails';
import Categorylist from './components/Categorylist';
import Product from './components/Product';
import RequireAuth from "./RequireAuth"
import Checkout from './pages/Checkout';
import ElectronicProduct from './components/ElectronicProduct';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/categorylist/:category"
          element={<Categorylist />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/electronicproducts" element={<ElectronicProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
