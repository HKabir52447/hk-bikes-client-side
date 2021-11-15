import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://lit-wildwood-08261.herokuapp.com/review", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  const [myorder, setMyorder] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch(`https://lit-wildwood-08261.herokuapp.com/purchaseBike`)
      .then((res) => res.json())
      .then((data) => setMyorder(data));
  }, [isDelete]);
  const handleDelete = (id) => {
    fetch(`https://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setIsDelete(true);
        } else {
          setIsDelete(false);
        }
      });
    console.log(id);
  };
  return (
    <div className="dashboard">
      <h2 className="py-4">Welcome To Dashboard</h2>
      <div className="container mx-auto w-75">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Make Admin
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="payment-tab"
              data-bs-toggle="tab"
              data-bs-target="#payment"
              type="button"
              role="tab"
              aria-controls="payment"
              aria-selected="false"
            >
              Payment
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="order-tab"
              data-bs-toggle="tab"
              data-bs-target="#order"
              type="button"
              role="tab"
              aria-controls="order"
              aria-selected="false"
            >
              My Order
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="review-tab"
              data-bs-toggle="tab"
              data-bs-target="#review"
              type="button"
              role="tab"
              aria-controls="review"
              aria-selected="false"
            >
              Review
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active pt-4"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            Home
          </div>
          <div
            className="tab-pane fade pt-4"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            Make Admin
          </div>
          <div
            className="tab-pane fade"
            id="payment"
            role="tabpanel"
            aria-labelledby="payment-tab"
          >
            <h5 className="pt-5">Payment system coming soon...</h5>
          </div>
          <div
            className="tab-pane fade"
            id="order"
            role="tabpanel"
            aria-labelledby="order-tab"
          >
            {myorder.map((order) => (
              <div className="order">
                <img className="img-fluid w-75" src={order.img} alt="" />
                <h3 className="text-primary pt-3">{order.name}</h3>
                <h4>{order.brand}</h4>
                <h5> ${order.price} </h5>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="btn btn-outline-danger px-4 fs-5"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div
            className="tab-pane fade add_bikes"
            id="review"
            role="tabpanel"
            aria-labelledby="review-tab"
          >
            <h3 className="pt-3 text-primary">Add your review</h3>
            <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
              <input {...register("name")} placeholder="Name" />

              <input {...register("email")} placeholder="Email" />
              <textarea {...register("reviews")} placeholder="Reviews" />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
