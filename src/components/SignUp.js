import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const SignUp = () => {
  const navigation = useNavigate();

  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [user, setUser] = useState();

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function submit(e) {
    e.preventDefault();

    if (!username) {
      setError({ ...error, username: "Enter your username" });
    } else if (!password) {
      setError({ ...error, password: "Enter your Password" });
    } else if (!confirmPassword) {
      setError({ ...error, confirmPassword: "Enter your ConfirmPassword" });
    }
    if (password != confirmPassword) {
      alert("Confirm password is Not Matched");
    } else {
      const formData = { username, email, password };

      fetch("https://enrique-backend-api.herokuapp.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code == 200) {
            toast.success(data.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
            navigation("/login");
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
  }

  return (
    <div className="form-center">
      <form className="auth-wrapper auth-inner ">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
          />
          {error.username && <span className="error">{error.username}</span>}
        </div>
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
          {error.password && <span className="error">{error.password}</span>}
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error.confirmPassword && (
            <span className="error">{error.confirmPassword}</span>
          )}
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">Login?</a>
        </p>
      </form>
    </div>
  );
};
