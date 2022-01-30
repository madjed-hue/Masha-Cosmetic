import React from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import "../Home/Home.css";

const Banner = () => {
  return (
    <div className="banner">
      <p>Welcome to Ecommerce</p>
      <h1>FIND AMAZING PRODUCTS BELOW</h1>

      <a href="#home__container">
        <button>
          Scroll <MouseIcon />
        </button>
      </a>

      <h2 className="homeHeading">Featured Products</h2>
    </div>
  );
};

export default Banner;
