import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import MultilevelSidebar from "./multilevel-sidebar.component";

import Navigation from "./Navigation";
import { Chartart } from "./Chartart";
// import TabularData from "./TabularData";
import TableData from "./TabularData";
import LoadingSpinner from "./Loader";

export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const getData = () => {
    fetch("https://enrique-backend-api.herokuapp.com/api/getproducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTableData(data.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterData && setTableData(filterData);
  }, [filterData]);

  return (
    <div>
      <MultilevelSidebar
        open={open}
        options={Menu}
        setFilterData={setFilterData}
        // onToggle={handleSidebarToggle}
        header=""
      />

      <div>
        {/* <button onClick={() => handleSidebarToggle(false)}>
          <AiOutlineMenu />
        </button> */}
      </div>
      <Navigation />
      {tableData ? <Chartart tableData={tableData} /> : <LoadingSpinner />}
      {tableData ? <TableData tableData={tableData} /> : <LoadingSpinner />}
    </div>
  );
};
