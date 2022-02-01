import React, { useEffect, useRef, useState } from "react";
import AdminBanner from "./AdminBanner/AdminBanner";
import BreadCrumbs from "./Breadcrumbs/BreadCrumbs";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Statistics from "./Statistics/Statistics";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const mobDashRef = useRef();
  const arrNumb = Array.from(Array(12).keys());
  const date = new Date();
  const theYear = date.getFullYear();
  const [lWidth, setWidth] = useState(window.screen.width);
  const updateWidth = () => {
    setWidth(window.screen.width);
  };
  const handleOpenMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  const myArrayNumb = arrNumb.map((number) => {
    return (number = Math.ceil(Math.random() * number * 1000));
  });
  const newArrayNumb = arrNumb.map((number) => {
    return (number = Math.floor(Math.random() * number * 1000));
  });

  const options = {
    responsive: true,
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const doughnutState = {
    labels: ["Out of Stock", "InStock", "WIATING FOR ORDER", "Order Completed"],
    datasets: [
      {
        backgroundColor: ["#461111", "#1F1D36", "#950101", "#3E065F"],
        hoverBackgroundColor: ["#483434", "#3F3351", "tomato", "#916BBF"],
        data: [5, 10, 15, 12],
      },
    ],
  };
  const lineState = {
    labels,
    datasets: [
      {
        label: `TOTAL SALES FOR ${theYear}`,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: myArrayNumb,
      },
    ],
  };
  const barState = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: myArrayNumb,
        backgroundColor: "#750550",
      },
      {
        label: "Dataset 2",
        data: newArrayNumb,
        backgroundColor: "#064663",
      },
    ],
  };
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="leftSide">
          <div
            className="dash__sidebar"
            style={{ marginLeft: `${lWidth === 425 ? "-100%" : "0"}` }}
          >
            <Sidebar />
          </div>
          <div className="dashboard__iconToggle">
            <ArrowCircleRightOutlinedIcon
              onClick={() => handleOpenMenu()}
              className={`${open ? "open" : ""}`}
            />
            <div
              className={`mobile__dash ${open ? "open" : ""}`}
              ref={mobDashRef}
            >
              <Sidebar />
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="breadcrumb">
            <BreadCrumbs />
          </div>
          <div className="statisc">
            <Statistics />
          </div>
          <div className="dashboard__banner">
            <AdminBanner />
          </div>
          <div className="charts">
            <div className="lineChart">
              <Line data={lineState} options={options} />
            </div>
            <div className="doughnutChart">
              <Doughnut data={doughnutState} />
            </div>
          </div>
          <div className="bar__chart">
            <Bar options={options} data={barState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
