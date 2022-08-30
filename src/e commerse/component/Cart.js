import React from "react";
import { useSelector } from "react-redux";
// import Prouduct from './Prouduct'
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action/index";
import { NavLink } from "react-router-dom";
export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleclose = (product) => {
    dispatch(delCart(product.id));
    console.log("alignItems");
  };

  const cartItmes = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="contniner py-4">
          <button
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => handleclose(product.id)}
          >
          
          </button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="180px"
              ></img>
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.qty} X ${product.price} = $
                {product.qty * product.price}
              </p>
              <button className="btn btn-outline-dark me-4">
                <i className="fa fa-minus"></i>
              </button>
              <button className="btn btn-outline-dark"  >     <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emptyCart = () => {
    <div className="px-4 my-5 bg-light rounded-3 py-3">
      <div className="contniner py-4">
        <div className="row">
          <h1>Your Cart is Empty</h1>
        </div>
      </div>
    </div>;
  };

  const button = () => {
    <div className="container">
      <div className="row">
        <NavLink to="/checkout" className=" btn btn-outline-dark me-4 w-25">
          Proceed To Checkout
        </NavLink>
      </div>
    </div>;
  };
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItmes)}
      {state.length !== 0 && button()}
    </>
  );
}
