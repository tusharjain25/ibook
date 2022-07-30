import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../Assets/ibooklogo.png";
import "font-awesome/css/font-awesome.min.css";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/Home");
      props.showAlert("Account created successfully","success");
    } else {
     // alert("invalid credentials");
      props.showAlert("Invalid details","danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container ">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={logo} className="img-fluid" alt="Sample" />
            </div>

            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mt-3">
                  <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                  <button
                    type="button"
                    className="btn btn-dark  btn-floating mx-1 "
                  >
                    <i className="fa fa-facebook fa-lg"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-dark btn-floating mx-1"
                  >
                    <i className="fa fa-twitter fa-lg"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-dark btn-floating mx-1"
                  >
                    <i className="fa fa-linkedin fa-lg"></i>
                  </button>
                </div>

                <div className="divider d-flex justify-content-center align-items-center my-2">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="form-outline mb-4">
                  {/* <label className="form-label" htmlFor="form3Example3">name-:</label> */}
                  <input
                    type="name"
                    id="form2Example2"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter your name"
                    value={credentials.name}
                    onChange={onChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  {/* <label className="form-label" htmlFor="form3Example3">Email address-:</label> */}
                  <input
                    type="email"
                    id="form3Example3"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    value={credentials.email}
                    onChange={onChange}
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="form-outline mb-3">
                  {/* <label className="form-label" htmlFor="form3Example4">Password-: </label> */}
                  <input
                    type="password"
                    id="form4Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid password"
                    value={credentials.password}
                    onChange={onChange}
                    name="password"
                    minLength={5}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="text-center text-lg-start mt-2 pt-2">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg"
                    style={{ paddingLeft: " 2.5rem", paddingRight: "2.5rem" }}
                  >
                    Signup
                  </button>

                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/Signup" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark fixed-bottom ">
          <div className="text-white mb-3 mb-md-0 ">
            2022 All rights reserved.
          </div>

          <div>
            <Link to="#!" className="text-white me-4">
              <i className="fa fa-facebook fa-lg"></i>
            </Link>
            <Link to="#!" className="text-white me-4">
              <i className="fa fa-twitter fa-lg"></i>
            </Link>
            <Link to="#!" className="text-white me-4">
              <i className="fa fa-google fa-lg"></i>
            </Link>
            <Link to="#!" className="text-white">
              <i className="fa fa-linkedin fa-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
