import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import "./Register.css";

const Register = () => {
  const {signInUsingGoogle} = useAuth();
  return (
    <div className="register">
      <div className="d-flex justify-content-center py-5">
        <form className="text-start px-5 py-3 border rounded-3">
          <h3 className="heading text-center">Please fill in form</h3>
          <div className="d-flex justify-content-evenly">
            <div className="mb-3 w-100 me-2">
              <label for="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your First Name"
                id="fname"
                aria-describedby="TextHelp"
              />
            </div>
            <div className="mb-3 w-100 ms-2">
              <label for="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Last Name"
                id="lname"
                aria-describedby="TextHelp"
              />
            </div>
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
          <div className="d-flex justify-content-evenly">
            <div className="mb-3 me-2 w-100">
              <label for="exampleInputEmail" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Your Password"
                id="exampleInputEamil"
              />
            </div>
            <div className="mb-3 ms-2 w-100">
              <label for="exampleInputEmail" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                id="exampleInputEamil"
              />
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
          <div className="mb-3 d-flex justify-content-evenly">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label class="form-check-label" for="flexRadioDefault3">
                Others
              </label>
            </div>
          </div>

          <div className="mb-3 text-center">
            <button className="btn btn-outline-primary fs-5 connect">
              {" "}
              Register{" "}
              <span className="arrow">
                <i class="fas fa-long-arrow-alt-right"></i>
              </span>{" "}
            </button>
          </div>

          <div className="text-center">
            <h6 className="text-danger">
              Already have an account?{" "}
              <span>
                {" "}
                <Link className="text-decoration-none" to="/signin">
                  Sing in
                </Link>{" "}
              </span>{" "}
            </h6>
          </div>
        </form>
      </div>
      <div className="pb-5">
        ========== OR =========
        <div className="mt-3 d-flex justify-content-center">
          <button onClick={signInUsingGoogle} className="btn btn-outline-primary fs-5 connect me-4">
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;