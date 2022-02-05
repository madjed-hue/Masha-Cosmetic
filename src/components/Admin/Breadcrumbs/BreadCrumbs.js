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
    navigate("/");
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
                navigate(`/${name}`);
              }}
            >
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
