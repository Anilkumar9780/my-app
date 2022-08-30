import React from "react";
import Navbar from "./component/Navbar";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Prouducts from "./component/Prouducts";
import Prouduct from "./component/Prouduct";
import Cart from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact";
import Footbar from "./component/Footbar";
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Prouducts />} />
        <Route exact path="/prouducts/:id" element={<Prouduct />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footbar/>
    </>
  );
}
