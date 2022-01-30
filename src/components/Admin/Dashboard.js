import React from "react";

import "./Dashboard.css";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash__sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
