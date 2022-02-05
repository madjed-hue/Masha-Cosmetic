import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
    <div className="BilingInfo">
      <div className="billingInfo__container">
        <div className="cardHeading">
          <h6>Billing Information</h6>
        </div>
        {companies.map((company) => {
          return (
            <div className="userCard" key={company.id}>
              <div className="userCard__heading">
                <div className="user__name">
                  <h3>{company.username} </h3>
                </div>
                <div className="user__action">
                  <Button color="error">
                    <DeleteIcon /> Delete
                  </Button>
                  <Button>
                    <EditIcon /> Edit
                  </Button>
                </div>
              </div>
              <div className="user__info">
                <div className="company">
                  <span className="upper__span">
                    User Name:
                    <span className="company__name">
                      <strong>
                        {company.name["firstname"] + company.name["lastname"]}
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
  );
};

export default BilingInfo;
