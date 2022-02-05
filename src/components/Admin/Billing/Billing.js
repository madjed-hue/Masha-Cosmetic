import React, { useEffect, useRef, useState } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import payCard from "../../../images/paymentImages/payementCard.jpg";
import payPal from "../../../images/paymentImages/paypal.png";
import masterCard from "../../../images/paymentImages/mastercard-2.svg";
import EditIcon from "@mui/icons-material/Edit";
import visaCard from "../../../images/paymentImages/visa.svg";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import "./Billing.css";
import { Button } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import BreadCrumbs from "../Breadcrumbs/BreadCrumbs";
import InvioceTable from "./InvioceTable";
import BilingInfo from "./BilingInfo";

const Billing = () => {
  const [open, setOpen] = useState(false);
  const mobDashRef = useRef();
  const [lWidth, setWidth] = useState(window.screen.width);
  const updateWidth = () => {
    setWidth(window.screen.width);
  };
  const handleOpenMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="billing">
      <div className="billing__container">
        <div className="leftSide">
          <div
            className="dash__sidebar"
            style={{ marginLeft: `${lWidth === 425 ? "-100%" : "0"}` }}
          >
            <Sidebar />
          </div>
          <div className="dashboard__iconToggle">
            <ArrowCircleRightOutlinedIcon
              onClick={() => handleOpenMenu()}
              className={`${open ? "open" : ""}`}
            />
            <div
              className={`mobile__dash ${open ? "open" : ""}`}
              ref={mobDashRef}
            >
              <Sidebar />
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="breadcrumb">
            <BreadCrumbs />
          </div>

          <div className="billing_methods">
            <div>
              <div className="methods">
                <div className="card">
                  <img src={payCard} alt="card-payement" />
                </div>
                <div className="paypalAndSalary">
                  <div className="salary">
                    <div className="saleryCard">
                      <AccountBalanceIcon />
                    </div>
                    <div className="info">
                      <h4>Salary</h4>
                      <p>Belong Interactive</p>
                      <h3>+$2000</h3>
                    </div>
                  </div>
                  <div className="paypal">
                    <div className="saleryCard">
                      <img
                        className="paypalImg"
                        src={payPal}
                        alt="paypal-logo"
                      />
                    </div>
                    <div className="info">
                      <h4>Paypal</h4>
                      <p>Freelance Payment</p>
                      <h3>$455.00</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment__mehtods">
                <div className="payment__banner">
                  <h4>Payment Method</h4>
                  <button>+ ADD NEW CARD</button>
                </div>
                <div className="payemesnt__cards">
                  <div className="mastercard">
                    <div className="paymentCarrd__left">
                      <img
                        className="cardType"
                        src={masterCard}
                        alt="mastercard-logo"
                      />
                      <h4>****</h4>
                      <h4>****</h4>
                      <h4>****</h4>
                      <h4>7581</h4>
                    </div>
                    <Button>
                      <EditIcon />
                    </Button>
                  </div>
                  <div className="visaCard">
                    <div className="paymentCarrd__left">
                      <img
                        className="cardType"
                        src={visaCard}
                        alt="visa-logo"
                      />
                      <h4>****</h4>
                      <h4>****</h4>
                      <h4>****</h4>
                      <h4>9327</h4>
                    </div>
                    <Button>
                      <EditIcon />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="invoices">
              <InvioceTable />
            </div>
          </div>
          <div className="billing__info__transaction">
            <div className="billing-info">
              <BilingInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
