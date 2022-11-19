// @ts-nocheck
import React from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

export const Chartart = ({ tableData }) => {
  const getMonthArr = (month) => {
    const arr = tableData;

    if (!arr) return null;

    const res = {};

    for (let i = 0; i < arr.length; i++) {
      let obj = arr[i];

      if (obj.month === month) {
        res[`${month}`] = res[`${month}`] ? [...res[`${month}`], obj] : [obj];
      }
    }

    return res[`${month}`];
  };

  const monthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    (month) => getMonthArr(month.toString())?.length
  );

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "September",
    "October",
    "Navember",
    "December",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(0,0,255)",
        data: monthData,
      },
    ],
  };

  const piedata = {
    labels: labels,
    datasets: [
      {
        labels: labels,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(99,0,132)",
        data: monthData,
      },
    ],
  };

  return (
    <div>
      <div className="chart-div">
        <div className="chart-1">
          <Pie data={piedata} />
        </div>
        <div className="chart-2">
          <Bar data={data} className="bar-chart" />
        </div>
        <div className="chart-3">
          <Line data={data} className="line-chart" />
        </div>
      </div>
    </div>
  );
};
