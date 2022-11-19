// @ts-nocheck
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

export const Chartart = ({ tableData }) => {
  const [firstMonth, setFirstmonth] = useState([]);
  const [secondMonth, setSecondmonth] = useState([]);
  const [thirdMonth, setthirdmonth] = useState([]);
  const [fourMonth, setFourmonth] = useState([]);
  const [fiveMonth, setFivemonth] = useState([]);
  const [sixMonth, setSixmonth] = useState([]);
  const [sevenMonth, setSevenmonth] = useState([]);
  const [eightMonth, setEightmonth] = useState([]);
  const [nineMonth, setNinemonth] = useState([]);
  const [tenMonth, setTenmonth] = useState([]);
  const [elevenMonth, setElevenmonth] = useState([]);
  const [twelveMonth, setTwelvemonth] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

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
        data: [
          firstMonth.length,
          secondMonth.length,
          thirdMonth.length,
          fourMonth.length,
          fiveMonth.length,
          sixMonth.length,
          sevenMonth.length,
          eightMonth.length,
          nineMonth.length,
          tenMonth.length,
          elevenMonth.length,
          twelveMonth.length,
        ],
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
        data: [
          firstMonth.length,
          secondMonth.length,
          thirdMonth.length,
          fourMonth.length,
          fiveMonth.length,
          sixMonth.length,
          sevenMonth.length,
          eightMonth.length,
          nineMonth.length,
          tenMonth.length,
          elevenMonth.length,
          twelveMonth.length,
        ],
      },
    ],
  };
  useEffect(() => {
    let first = tableData.filter((elm) => elm.month == 1);
    setFirstmonth(first);
    let second = tableData?.filter((elm) => elm.month == 2);
    setSecondmonth(second);
    let third = tableData?.filter((elm) => elm.month == 3);
    setthirdmonth(third);
    let fourth = tableData?.filter((elm) => elm.month == 4);
    setFourmonth(fourth);
    let five = tableData?.filter((elm) => elm.month == 5);
    setFivemonth(five);
    let six = tableData?.filter((elm) => elm.month == 6);
    setSixmonth(six);
    let seven = tableData?.filter((elm) => elm.month == 7);
    setSevenmonth(seven);
    let eight = tableData?.filter((elm) => elm.month == 8);
    setEightmonth(eight);
    let nine = tableData?.filter((elm) => elm.month == 9);
    setNinemonth(nine);
    let ten = tableData?.filter((elm) => elm.month == 10);
    setTenmonth(ten);
    let eleven = tableData?.filter((elm) => elm.month == 11);
    setElevenmonth(eleven);
    let twelve = tableData?.filter((elm) => elm.month == 12);
    setTwelvemonth(twelve);
  }, [tableData]);

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
