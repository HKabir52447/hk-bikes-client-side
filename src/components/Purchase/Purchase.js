import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Purchase.css";

const Purchase = (props) => {
  const {user, logOut} = useAuth();
  const index = props.index;
  const { _id } = useParams();
  const [details, setDetails] = useState([]);
  const [singleBike, setSingleBike] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => setDetails(data));
      
  }, []);
  useEffect(() => {
    const foundService = details.find((bike) => bike._id === _id);
    setSingleBike(foundService);
    // console.log(foundService);
  }, [details]);
  
  const [purchase, setPurchase] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
  const handlePurchase =(index) =>{
    const data = purchase[index];
    
    fetch("http://localhost:5000/purchaseBike", {
    method: "POST",
    headers:{"content-type": "application/json"},
    body: JSON.stringify(data)  
    });

  }
  return (
    <div>
      <h4 className="pt-4">{user.displayName} </h4>
      <h5>{user.email} </h5>
      <div className="bike w-50 mx-auto mt-5">
        <div>
          <h4>{singleBike?.name} </h4>
          <p>{singleBike?.brand}</p>
          <img className="img-fluid w-75" src={singleBike?.img} alt="" />
          <p>{singleBike?.description} </p>
        </div>
        <NavLink to='/dashboard'>
      <button onClick={()=> handlePurchase(index)} className='btn btn-outline-primary px-4 fs-5 fw-bold mt-2'>Purchase</button>
      </NavLink>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Purchase;
