import { Button, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Loader from "../../Loader/Loader";
import "./BilingInfo.css";

const BilingInfo = () => {
  const [companies, setCompany] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await fetch("https://fakestoreapi.com/users?limit=3")
        .then((res) => res.json())
        .then((json) => json);
      console.log(request);
      setCompany(request);
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
          <div className="BilingInfo">
            <div className="billingInfo__container">
              <div className="cardHeading">
                <Typography>
                  <h6>Billing Information</h6>
                </Typography>
              </div>
              {companies.map((company) => {
                return (
                  <div className="userCard" key={company.id}>
                    <div className="userCard__heading">
                      <div className="user__name">
                        <h3>{company.username} </h3>
                      </div>
                      <div className="user__action">
                        <Button color="error" className="btn__action">
                          <DeleteIcon fontSize="small" />
                          <Typography variant="span">Delete</Typography>
                        </Button>
                        <Button className="btn__action">
                          <EditIcon fontSize="small" />
                          <Typography variant="span">Edit</Typography>
                        </Button>
                      </div>
                    </div>
                    <div className="user__info">
                      <div className="company">
                        <span className="upper__span">
                          User Name:
                          <span className="company__name">
                            <strong>
                              {company.name["firstname"] +
                                company.name["lastname"]}
                            </strong>
                          </span>
                        </span>
                        <span className="upper__span">
                          Email Address:
                          <span className="company__name">
                            <strong>{company.email}</strong>
                          </span>
                        </span>
                        <span className="upper__span">
                          VAT Number:
                          <span className="company__name">
                            <strong>{company.password}</strong>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default BilingInfo;
