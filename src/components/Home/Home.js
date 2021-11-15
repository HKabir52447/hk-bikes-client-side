import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bike from "../Bike/Bike";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch("https://lit-wildwood-08261.herokuapp.com/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data.slice(0, 6)));
  }, []);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://lit-wildwood-08261.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <img
            className="img-fluid banner"
            src={
              "https://demo.wolfthemes.com/motoblog/wp-content/themes/motoblog/images/presets/monster.jpg"
            }
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="row pb-5">
          <div className="col-md-12">
            <h2 className="text-primary py-4">Our bikes collection</h2>
            <div className="bikes-container">
              {bikes.map((bike, index) => (
                <Bike key={bike.id} bikes={bike} index={index}></Bike>
              ))}
            </div>
            <Link to="/bikes">
              <button className="btn btn-outline-primary px-4 py-1 details fs-4">
                {" "}
                See More..{" "}
                <span className="arrow">
                  <i class="fas fa-long-arrow-alt-right"></i>
                </span>{" "}
              </button>
            </Link>
          </div>
        </div>
        <div className="row pb-5">
          <h3 className="py-4 text-primary">Top Reviews</h3>
          <div className="reviews">
            {reviews.map((review) => (
              <Review key={review._id} reviews={review}></Review>
            ))}
          </div>
        </div>
        <div className="about">
          <h5 className="pt-4">About Us</h5>
          <h3 className="heading">
            {" "}
            <span style={{ color: "#e10f28" }}>HK</span> Bikes{" "}
          </h3>
          <div className="about-details">
            <div>
              <p className="about-description">
                HK Bikes is number 1 motorcycle oriented website in Bangladesh
                where Bike enthusiasts from all over the country can find all
                the information about any bike. From motorcycle price in
                Bangladesh and Motorcycle Specification to the test ride reviews
                of various bikes and first impression reviews of any newly
                launched bikes. Since 2012, BikeBD is providing information to
                everyone across the nation about various offers from the
                motorcycle or related companies, news, coverage of motorcycle
                based or related events, and any update on any rules about
                motorcycle sector in Bangladesh.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <img
                src="https://demo.wolfthemes.com/motoblog/wp-content/themes/motoblog/images/presets/monster.jpg"
                className="img-fluid "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
