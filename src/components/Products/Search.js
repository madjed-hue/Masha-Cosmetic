import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (id.trim()) {
      //   navigate(`/products/${keyword}`);

      navigate(`/products/${id}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <Fragment>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setId(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
