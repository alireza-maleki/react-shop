import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Product from "./Products/Product";
import Login from "./Login/Login";
import CardItem from "./Card/CardItem";
import Login2 from "./Login/Login2";
import Address from "./UserAddress/Address";
import Redirect from "./Redirect/Redirect";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Product />} />
        <Route path="signup" element={<Login />} />
        <Route path="carditem" element={<CardItem />}/>
        <Route path="carditem/signup" element={<Login />}/>
        <Route path="login" element={<Login2 />}/>
        <Route path="address" element={<Address />}/>
        <Route path="*" element={<Redirect />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
