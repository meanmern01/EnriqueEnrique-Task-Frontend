import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const Login = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function login(e) {
    e.preventDefault();
    fetch("http://localhost:9090/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userInput: email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code == 200) {
          toast.success(data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          localStorage.setItem("username", JSON.stringify(data.user.username));
          localStorage.setItem("token", JSON.stringify(data.token));
          navigation("/dashboard");
        } else {
          toast.error(data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  return (
    <div className="form-center">
      <form className="auth-wrapper auth-inner-login">
        <h3>Login</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={login}>
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/">sign Up?</a>
        </p>
      </form>
    </div>
  );
};
