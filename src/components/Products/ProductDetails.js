import { Rating } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Loader from "../Loader/Loader";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import "animate.css/animate.compat.css";

const ProductDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const increaseQuantity = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseQuantity = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const { image, category, title, price, description } = details;
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => json);
      setDetails(request);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  const options = {
    name: "simple-controlled",
    size: "large",
    readOnly: true,
    value: 4.5,
    precision: 0.5,
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="ProductDetails">
            <div>
              <img className="CarouselImage" src={image} alt={`${category}`} />
            </div>
            <div className="rightSide">
              <div className="detailsBlock-1">
                <h2>{title}</h2>
                <h4>{category}</h4>
                <p>Product # {id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating name="read-only" {...options} id="rating" />
                <span className="detailsBlock-2-span" id="reviews">
                  (150 reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`$${price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={count} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    onClick={() => {
                      Store.addNotification({
                        title: "Great!",
                        message: "Product Added to Cart Successfully",
                        type: "success",
                        insert: "top",
                        container: "bottom-center",
                        animationIn: ["animated", "jackInTheBox"],
                        animationOut: ["animated", "flipOutY"],
                        dismiss: {
                          duration: 3000,
                          onScreen: true,
                        },
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="detailsBlock-4">
                  Description : <p>{description}</p>
                </div>
                <button className="submitReview">Submit Review</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
