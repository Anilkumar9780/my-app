import React from "react";
import bg from "./img/bg (2).jpg";
import Prouducts from "./Prouducts";
export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={bg} className="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content">
          <div className="container">
            <h5 className="card-title display-3 fw-bold mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT THE TRENDS</p>
          </div>
        </div>
      </div>
      <Prouducts></Prouducts>
    </div>
  );
}
