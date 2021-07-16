import React from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "# of Checkouts",
      data: [
        12, 19, 10, 15, 12, 13, 15, 2, 12, 19, 10, 15, 12, 13, 15, 0, 12, 19,
        10, 15, 12, 13, 15, 30, 12, 19, 10, 15, 12, 13, 15, 30, 12, 19, 10, 15,
        12, 13, 15, 0,
      ],
      fill: true,
      backgroundColor: "rgb(83, 4, 255, 0.1)",
      borderColor: "rgb(83, 4, 255)",
    },
  ],
};

const options = {
  fillOpacity: 0.2,
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          unit: "month",
        },
      },
    ],
  },
  elements: {
    point: {
      radius: 1,
    },
    line: {
      tension: 0.5, // disables bezier curves
    },
  },
  maintainAspectRatio: true,
  x: {
    ticks: {
      display: false,
      maxTicksLimit: 0,
    },
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
      },
    },
  },
};

const Chart = () => {
  return <Line data={data} width={5} height={3} options={options} />;
};

export default Chart;
