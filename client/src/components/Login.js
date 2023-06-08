import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Login = () => {
  const data = { email: "", password: "" };
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
    if (!inputData.email || !inputData.password) {
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
            <h3
              style={{
                backgroundColor: "green",
                color: "white",
                textAlign: "center",
              }}
            >
              Login Successfully{" "}
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <NavLink to="/">
                <Button variant="danger">Continue Shopping</Button>
              </NavLink>
            </div>
          </>
        ) : (
          ""
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="login">
          <h3>Login Page</h3>

          <input
            type="email"
            name="email"
            className="inputbox"
            value={inputData.email}
            onChange={handleData}
            placeholder="Enter Email"
          />

          <input
            type="password"
            name="password"
            className="inputbox"
            value={inputData.password}
            onChange={handleData}
            placeholder="Enter Password"
          />
          <button type="login" className="add-button">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
