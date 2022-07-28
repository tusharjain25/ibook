import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/ibooklogo.png";


const Navo = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid" >
          <Link className="navbar-brand " to="/" >
            <img
              src={logo}
              alt=""
              width="35"
              height="30"
              className="d-inline-block align-text-top mx-2"
              
            />
            iBook
          </Link>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" >
                    Home
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
              <Link className="btn btn-dark mx-1" to="/" role="button">Login</Link>
              <Link className="btn btn-dark mx-1" to="/Signup" role="button">signup</Link>
      
              </form>
            </div>
          </div>
        </nav>
  );
};

export default Navo;
