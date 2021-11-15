import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className="about">
        <div className='about-details'>
          <div>
            <h5 className="pt-4">About Us</h5>
            <h3 className="heading"> <span style={{color: "#e10f28"}}>HK</span> Bikes </h3>
            <p className='about-description'>HK Bikes is number 1 motorcycle oriented website in Bangladesh where Bike enthusiasts from all over the country can find all the information about any bike. From motorcycle price in Bangladesh and Motorcycle Specification to the test ride reviews of various bikes and first impression reviews of any newly launched bikes. Since 2012, BikeBD is providing information to everyone across the nation about various offers from the motorcycle or related companies, news, coverage of motorcycle based or related events, and any update on any rules about motorcycle sector in Bangladesh.
  
            </p>
          </div>
          <div className='d-flex align-items-center'>
      <img src="https://demo.wolfthemes.com/motoblog/wp-content/themes/motoblog/images/presets/monster.jpg" className='img-fluid ' alt=''/>
          </div>
        </div>
      </div>
    );
};

export default About;