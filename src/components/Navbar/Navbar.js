import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo1 from "../../images/MADJED.png";
import "./Navbar.css";

const Navbar = ({ setSelectedOption }) => {
  return (
    <ReactNavbar
      burgerColor="tomato"
      burgerColorHover="#f3d8cf"
      logo={logo1}
      logoWidth="20vmax"
      navColor1="rgb(255 255 255 / 97%)"
      logoHoverSize="10px"
      logoHoverColor="tomato"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.7vmax"
      link1Color="#000"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="tomato"
      link1Margin="1vmax"
      profileIconUrl="/login"
      profileIconColor="#444"
      searchIconColor="#444"
      cartIconColor="#444"
      profileIconColorHover="tomato"
      searchIconColorHover="tomato"
      cartIconColorHover="tomato"
      cartIconMargin="1vmax"
    />
  );
};

export default Navbar;
