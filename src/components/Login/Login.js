import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
  const {signInUsingGoogle} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home';
  const handleGoogleLogin = () =>{
    signInUsingGoogle()
    .then(result => {
      history.push(redirect_url)
    })
  }
    return (
        <div  className='d-flex justify-content-center py-5 signin'>
          <div>
            <form className="text-start px-5 py-3 border rounded-3">
        <h3 className="heading text-center">Please Sign in</h3>
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
        </div>
          <div className="mb-3">
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
          
        <div className="mb-3 text-center">
          <button className="btn btn-outline-primary fs-5 connect">
            {" "}
            Sign in{" "}
            <span className="arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </span>{" "}
          </button>
        </div>
        <div className="text-center">
            <h6 className="text-danger">
              New user?{" "}
              <span>
                {" "}
                <Link className="text-decoration-none" to="/signup">
                  Sing up
                </Link>{" "}
              </span>{" "}
            </h6>
          </div>
      </form>
      <div className="pb-5">
        ========== OR =========
        <div className="mt-3 d-flex justify-content-center">
          <button onClick={handleGoogleLogin} className="btn btn-outline-primary fs-5 connect me-4">
            Sign In With Google
          </button>
        </div>
      </div>
        </div>
        </div>
    );
};

export default Login;