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
      data: [12, 19, 10, 15, 12, 13, 15, 100],
      fill: false,
      backgroundColor: "rgb(83, 4, 255)",
      borderColor: "rgb(83, 4, 255)",
    },
  ],
};

const options = {
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

const Chart = () => <Line data={data} width={5} height={3} options={options} />;

export default Chart;
