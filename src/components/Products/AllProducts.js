import React, { Fragment, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Products from "../Products/Products";
import "./AllProducts.css";

const AllProducts = ({ selectedOption }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await fetch(selectedOption)
        .then((res) => res.json())
        .then((json) => json);
      // console.log(request);
      setProducts(request);
      setLoading(false);
    }
    fetchData();
  }, [selectedOption]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="all__products">
            <h2 className="productsHeading">Products</h2>
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

export default AllProducts;
