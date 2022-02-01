import React, { useEffect, useRef, useState } from "react";
import BreadCrumbs from "../Breadcrumbs/BreadCrumbs";
import Sidebar from "../Sidebar/Sidebar";
import Users from "../Users/Users";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import "./Tables.css";
import ProductList from "../Products/ProductList";

const Tables = () => {
  const [open, setOpen] = useState(false);
  const mobDashRef = useRef();
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
  return (
    <div className="tables">
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
          <div className="users">
            <Users />
          </div>
          <div className="products">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
