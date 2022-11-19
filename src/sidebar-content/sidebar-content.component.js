import React, { useState } from "react";

import { Form } from "react-bootstrap";

const SidebarContent = (props) => {
  const { sidebarProps, headerContent } = props;
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50);
  const [minSold, setMinSold] = useState(0);
  const [maxSold, setMaxSold] = useState(50);

  const priceValue = {
    min: minPrice,
    max: maxPrice,
  };
  const soldValue = {
    min: minSold,
    max: maxSold,
  };
  // maxPrice && setPrice(priceValue);
  // maxSold && setSold(soldValue);
  return (
    <div {...sidebarProps}>
      <div className="sidebar-main-content">
        {headerContent}
        <div className="sidebar-body">
          <ul>
            <li style={{ display: "flex", flexDirection: "column" }}>
              <h6>Price</h6>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Form style={{ width: "48%" }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Min</Form.Label>
                    <Form.Control
                      type="number"
                      value={minPrice}
                      onChange={(e) => {
                        setMinPrice(e.target.value);
                      }}
                      placeholder="Enter Number"
                    />
                  </Form.Group>
                </Form>
                <Form style={{ width: "48%" }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Max</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Number"
                      value={maxPrice}
                      onChange={(e) => {
                        setMaxPrice(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </div>
            </li>
            <li style={{ display: "flex", flexDirection: "column" }}>
              <h6>Sold</h6>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Form style={{ width: "48%" }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Min</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Number"
                      value={minSold}
                      onChange={(e) => {
                        setMinSold(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
                <Form style={{ width: "48%" }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Max</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Number"
                      value={maxSold}
                      onChange={(e) => {
                        setMaxSold(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <button
            className="btn btn-outline-success"
            onClick={() => {
              fetch("https://enrique-backend-api.herokuapp.com/api/filter", {
                method: "POST",
                body: JSON.stringify({
                  price: priceValue,
                  soldquantity: soldValue,
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${JSON.parse(
                    localStorage.getItem("token")
                  )}`,
                },
              })
                .then((res) => res.json())
                .then((data) => {
                  props.setFilterData(data.message);
                });
            }}
          >
            apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
