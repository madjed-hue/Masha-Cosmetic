import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../Loader/Loader";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const request = await fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((json) => json);
      console.log(request);
      setUsers(request);

      setLoading(false);
    }
    fetchUsers();
  }, []);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },

    {
      field: "username",
      headerName: "Username",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: "phone",
      headerName: "Phone°No",
      type: "string",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "city",
      headerName: "City",
      type: "string",
      minWidth: 150,
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
        return (
          <Fragment>
            <Link to={`/admin/user/${params.row.id}`}>
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
  users &&
    users.forEach((user) => {
      rows.push({
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        city: user.address.city,
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
              <h1 id="productListHeading">ALL USERS</h1>

              <DataGrid
                rows={rows}
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

export default Users;
