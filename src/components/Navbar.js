import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/ibooklogo.png";
import { useNavigate } from "react-router-dom";


const Navbar = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
   
          <div className="container-fluid" >
          <Link className="navbar-brand " to="#!" >
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
                  <Link className="nav-link active" aria-current="page" to="/Home" >
                    Home
                  </Link>
                </li>
                <li>
                {!localStorage.getItem('token')?
                 <Link className="btn btn-primary" to="/Notes" role="button"> ----- </Link>
                  :<Link className="btn btn-primary" to="/Notes" role="button">notes</Link>}
                </li>
              </ul> 


              {!localStorage.getItem('token')?<form className="d-flex" role="search">
              <Link className="btn btn-dark mx-1" to="/" role="button">Login</Link>
              <Link className="btn btn-dark mx-1" to="/Signup" role="button">signup</Link>
              </form>:<button onClick={handleLogout} className="btn btn-primary ">Logout</button> }
            </div>
          </div>
        </nav>
        </>
  );
};

export default Navbar;
