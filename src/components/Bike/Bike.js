import React from 'react';
import { Link } from 'react-router-dom';
import './Bike.css';
// import { NavLink } from 'react-router-dom';

const Bike = (props) => {
    const {name, brand, price, description, img} = props.bikes
    return (
        <div className="bike">
      <img className="img-fluid" src={img} alt={name} />
      <h4 className="sub-heading text-center">{name}</h4>
      <h5 className="sub-heading text-center">{brand}</h5>
      <p>
        {description.slice(0,150)}
      </p>
      <h6>{price} $ </h6>
      <div className="text-center">
      <Link to={`/bikes/${props.bikes._id}`}>
            <button className="btn btn-outline-primary px-4 py-1 details fs-5">
              {" "}
              Buy Now{" "}
              <span className="arrow">
                <i class="fas fa-long-arrow-alt-right"></i>
              </span>{" "}
            </button>
          </Link>
      </div>
    </div>
    );
};

export default Bike;