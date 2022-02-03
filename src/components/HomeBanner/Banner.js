import React from "react";
import MouseIcon from "@mui/icons-material/Mouse";

import Slider from "react-animated-slider";
import "../Home/Home.css";
import Content from "./Content";
import "./custom.css";

const Banner = () => {
  return (
    <div className="banner">
      {/* <p>Welcome to Ecommerce</p>
      <h1>FIND AMAZING PRODUCTS BELOW</h1>

      <a href="#home__container">
        <button>
          Scroll <MouseIcon />
        </button>
      </a>

      <h2 className="homeHeading">Featured Products</h2> */}
      <Slider autoplay={3000} classNames="slider">
        {Content.map((item, index) => (
          <div
            key={index}
            className="sliderContent"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
