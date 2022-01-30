import React, { Fragment, useState } from "react";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import "./UserOptions.css";

const UserOptions = () => {
  const options = [
    { icon: <DashboardIcon />, name: "Dashboard", func: dashboard },
    { icon: <ListAltIcon />, name: "Orders" },
    { icon: <PersonIcon />, name: "Profile" },
    { icon: <ShoppingCartIcon />, name: `Cart` },
    { icon: <ExitToAppIcon />, name: "Logout" },
  ];
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function dashboard() {
    navigate("/dashboard");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        className="speedDial"
        style={{ zIndex: "11" }}
        icon={
          <img
            className="speedDialIcon"
            src={
              "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
            }
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth < 768 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
