import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/" replace />;
    }

    return children;
  };
  const ProtectedRouteRegister = ({ token, children }) => {
    if (token) {
      return <Navigate to="/dashboard" replace />;
    }

    return children;
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRouteRegister token={localStorage.getItem("token")}>
                <SignUp />
              </ProtectedRouteRegister>
            }
          />

          <Route
            path="/login"
            element={
              <ProtectedRouteRegister token={localStorage.getItem("token")}>
                <Login />
              </ProtectedRouteRegister>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
