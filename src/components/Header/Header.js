import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
// import logo from '../../images/Medico-logo.png';
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const {user, logOut} = useAuth();
  const activeStyle = {
    background: "#e10f28",
    color: "#fff",
    borderRadius: "5px",
  };

  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="logo" to="/">
            <p>
            {/* <img className='img-fluid medio_logo' src={logo} alt='medico logo'/> */}
            </p>
            <h5>
              <span className='name'> HK </span> <br /> <span className="logo-text">Bikes</span>{" "}
            </h5>{" "}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/bikes"
                >
                  Bikes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/contact"
                >
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item header-form">
              
                {user.email ? 
               <span>
                 <NavLink onClick={logOut}
               className="menu-link"
               activeStyle={activeStyle}
               to="/signin"
             >
               Sign Out
             </NavLink>
                 <NavLink
               className="menu-link"
               activeStyle={activeStyle}
               to="/dashboard"
             >
               Dashboard
             </NavLink>
               </span>
               :
                  <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/signin"
                >
                  Sign In
                </NavLink>} <br/> <span>{user.displayName}</span>
              </li>
              <li className="nav-item">
               
               <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
