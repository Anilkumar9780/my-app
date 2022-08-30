import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-1 shadow-sm">
        <div className="container">
          <NavLink to="" className="navbar-brand  fw-bolder fs-8">
            <b style={{fontSize:"50px"}}>E-Shop</b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto m-40 mb-8 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className="nav-link" href="#">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" href="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" href="#">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons mb-1">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"> Login</i>
              </NavLink>
              &nbsp;
              <NavLink to="/register" className="btn btn-outline-dark ms-2 ">
                <i className="fa fa-user-plus me-1"> Register</i>
              </NavLink>
              &nbsp;
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-cart-plus me-1"> Cart({state.length})</i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
