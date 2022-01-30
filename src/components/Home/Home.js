import React, { Fragment, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Loader from "../Loader/Loader";
import Products from "../Products/Products";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await fetch("https://fakestoreapi.com/products?limit=8")
        .then((res) => res.json())
        .then((json) => json);
      setProducts(request);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="home">
            <Banner />
            <div className="home__container" id="home__container">
              {products.map((product) => {
                return <Products product={product} key={product.id} />;
              })}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
