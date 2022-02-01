import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation, useNavigate } from "react-router-dom";

const BreadCrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((x) => x);
  // console.log(pathnames);
  function navigateDashboard() {
    navigate("/dashboard");
  }

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          onClick={() => {
            navigateDashboard();
          }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        {pathnames.map((name, index) => {
          return (
            <Link
              key={name}
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              onClick={() => {
                navigate(`/dashboard/${name}`);
              }}
            >
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>

      {/* <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          onClick={() => {
            navigateTables();
          }}
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Tables
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          onClick={() => {
            navigateBilling();
          }}
        >
          <PaymentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Billing
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          onClick={() => {
            navigateProducts();
          }}
        >
          <CategoryIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Products
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          onClick={() => {
            navigateUsers();
          }}
        >
          <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Users
        </Link> */}
    </div>
  );
};

export default BreadCrumbs;
