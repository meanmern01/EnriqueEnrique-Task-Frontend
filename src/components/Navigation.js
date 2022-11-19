import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigation = useNavigate();
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("username"))
  );
  const logout = () => {
    fetch("https://enrique-backend-api.herokuapp.com/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Assss");
        if (data.code == 200) {
          console.log("All Done");
          localStorage.removeItem("token");

          navigation("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Navbar
      style={{
        background: "#f3f3f3",
      }}
    >
      <Container>
        {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <h6>Welcome,{userName}</h6>
            <button
              style={{
                background: "#1D82E5",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
              }}
              onClick={logout}
            >
              LOGOUT
            </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
