import React from "react";
import Table from "react-bootstrap/Table";

const TableData = ({ tableData }) => {
  return (
    <div className="main-div-tabular">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>description</th>
            <th>price</th>
            <th>discountpercentage </th>
            <th>rating</th>
            <th>stock</th>
            <th>brand</th>
            <th>category</th>
            <th>thumbnail</th>
            <th>month</th>
            <th>soldquantity</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data, index) => {
            return (
              <tr id={index}>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{data.price}</td>
                <td>{data.discountpercentage}</td>
                <td>{data.rating}</td>
                <td>{data.stock}</td>
                <td>{data.brand}</td>
                <td>{data.category}</td>
                <td>
                  <img src={data.thumbnail} alt="" />
                </td>
                <td>{data.month}</td>
                <td>{data.soldquantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
