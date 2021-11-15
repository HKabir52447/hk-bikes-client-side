import React, { useEffect, useState } from "react";
import './Explore.css';
import Bike from "../Bike/Bike";
// import bikes from "../bikes/bikes";
import "./Explore.css";
const Explore = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return (
    <div className="container">
      <div className="row pb-5">
        <div className="col-md-12">
          <h2 className="text-primary py-4">Our bikes collection</h2>
          <div className="bikes-container">
            {bikes.map((bike, index) => (
              <Bike key={bike.id} bikes={bike} index={index}></Bike>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;