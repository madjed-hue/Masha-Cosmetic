import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../Loader/Loader";
import "./ProductList.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const request = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => json);
      console.log(request);
      setProducts(request);

      setLoading(false);
    }
    fetchUsers();
  }, []);
  const columns = [
    {
      field: "id",
      headerName: "Product ID",
      minWidth: 200,
      flex: 0.4,
    },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "image",
      headerName: "Image",
      minWidth: 150,
      flex: 0.4,
      renderCell: (params) => {
        return (
          <div className="img__container">
            <img className="productList__img" src={params.row.image} alt="" />
          </div>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 270,
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        // let id = params.row;
        let id = params.row.id;
        return (
          <Fragment>
            <Link to={`/admin/product/${id}`}>
              <EditIcon />
            </Link>

            <Button>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];
  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item.id,
        image: item.image,
        price: "$" + item.price,
        name: item.title,
      });
    });
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="dashboard">
            <div className="productListContainer">
              <h1 id="productListHeading">ALL PRODUCTS</h1>

              <DataGrid
                rows={rows}
                rowHeight={70}
                columns={columns}
                rowsPerPageOptions={[5, 10, 20]}
                pageSize={10}
                disableSelectionOnClick
                className="productListTable"
                autoHeight
              />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductList;
