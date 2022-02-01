import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import PublicIcon from "@mui/icons-material/Public";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import "./Statistics.css";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics__container">
        <div className="card">
          <div className="info">
            <h5>Today's Money</h5>
            <span className="big">$53,000</span>
            <span>+55%</span>
          </div>
          <div className="icon">
            <PaidIcon />
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h5>Today's Users</h5>
            <span className="big">2,300</span>
            <span>+3%</span>
          </div>
          <div className="icon">
            <PublicIcon />
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h5>New Clients</h5>
            <span className="big">+3,462</span>
            <span style={{ color: "red" }}>-2%</span>
          </div>
          <div className="icon">
            <FeedOutlinedIcon />
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h5>Total Sales</h5>
            <span className="big">$103,430</span>
            <span>+5%</span>
          </div>
          <div className="icon">
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
