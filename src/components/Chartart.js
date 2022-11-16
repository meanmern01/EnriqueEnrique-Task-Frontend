import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const piedata = {
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

export const Chartart = () => {
  return (
    <div>
      <div className="chart-div">
        <div>
          <Pie data={piedata} />
        </div>
        <div>
          <Bar data={data} />
        </div>
        <div>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};
