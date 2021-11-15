import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <h3 className="heading py-4">Contact Us</h3>
      <div className='contact-info mb-5 '>
        <form className='text-start px-5 py-3 border rounded-3'>
            <h3 className='heading text-center'>Send your query</h3>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              id="name"
              aria-describedby="TextHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              id="exampleInputEamil"
            />
            <div id="TextHelp" className="form-text">
              We'll never share your Email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Your Phone Number"
              id="phone"
              aria-describedby="TextHelp"
            />
          </div>
          <div className="mb-3">
            <label for="sub" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Subject"
              id="sub"
              aria-describedby="TextHelp"
            />
          </div>
          <div class="mb-3">
          <label for="Message" className="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="Message"
              placeholder="Your Message"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <div className='mb-3'>
          <button className='btn btn-outline-primary px-4 py-1 fs-4'> Send <span className='arrow'><i class="fas fa-long-arrow-alt-right"></i></span> </button>
          </div>
        </form>
        <div className='text-start px-4 py-3 border rounded-3'>
            <h3 className='heading text-center'>Address</h3>
            <h5 className='py-3 text-center'>HK Bikes East jurain <br/> Nama Shyampur Dhaka 1204</h5>
            <div>
                <h3 className='pb-3 ps-5 text-center'>Telephone</h3>
                <div className='address'>
                    <div className="contact-person">
                    <h6>MD. Humayun Kabir</h6>
                    <h6>MD. Rayhan Sobhan</h6>
                    <h6>MD. Monjurul Islam</h6>
                    <h6>MD. Pervaj Hossain</h6>
                    </div>
                    <div className="contact-number">
                    <h6>01712345679</h6>
                    <h6>01700000000</h6>
                    <h6>01733333333</h6>
                    <h6>01722222222</h6>
                    </div>

                </div>
            </div>
        </div>
      </div>
        </div>
    );
};

export default Contact;