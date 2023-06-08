import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  const data = { name: "", email: "", mobile: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("success");
  }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !inputData.name ||
      !inputData.email ||
      !inputData.mobile ||
      !inputData.password
    ) {
      alert("Please Fill All Fields..");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre>
        {flag ? (
          <>
            <h3 style={{ backgroundColor: "green", color: "white" }}>
              Hi, {inputData.name} You have Registered Successfully{" "}
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <NavLink to="/login">
                <Button variant="danger">Login</Button>
              </NavLink>
            </div>
          </>
        ) : (
          ""
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="register">
          <h3>Register Page</h3>
          <input
            type="text"
            name="name"
            className="inputbox"
            value={inputData.name}
            onChange={handleData}
            placeholder="Enter Name"
          />
          <input
            type="email"
            name="email"
            className="inputbox"
            value={inputData.email}
            onChange={handleData}
            placeholder="Enter Email"
          />
          <input
            type="number"
            name="mobile"
            className="inputbox"
            value={inputData.mobile}
            onChange={handleData}
            placeholder="Enter Mobile No."
          />
          <input
            type="password"
            name="password"
            className="inputbox"
            value={inputData.password}
            onChange={handleData}
            placeholder="Enter Password"
          />
          <button type="signup" className="add-button">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
