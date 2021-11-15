import React from 'react';
import './Review.css';

const Review = (props) => {
    const{name, email, reviews} = props.reviews
    return (
        <div className='review'>
            <h4>
                {name}
            </h4>
            <h6>
                {email}
            </h6>
            <p>
                {reviews}
            </p>
        </div>
    );
};

export default Review;