import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./Transaction.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PriorityHighOutlinedIcon from "@mui/icons-material/PriorityHighOutlined";

const Transaction = () => {
  const newestData = [
    {
      platform: "Netflix",
      day: "27 March 2020, at 12:30 PM",
      price: "- $ 2,500",
      icon: <KeyboardArrowDownOutlinedIcon fontSize="small" />,
    },
    {
      platform: "Apple",
      day: "27 March 2020, at 04:30 AM",
      price: "+ $ 2,000",
      icon: <KeyboardArrowUpOutlinedIcon fontSize="small" />,
    },
  ];
  const yesterdayData = [
    {
      platform: "Stripe",
      day: "26 March 2020, at 13:45 PM",
      price: "+ $ 750",
      icon: <KeyboardArrowUpOutlinedIcon fontSize="small" />,
    },
    {
      platform: "HubSpot",
      day: "26 March 2020, at 12:30 PM",
      price: "+ $ 1,000",
      icon: <KeyboardArrowUpOutlinedIcon fontSize="small" />,
    },
    {
      platform: "Creative Tim",
      day: "26 March 2020, at 08:30 AM",
      price: "+ $ 2,500",
      icon: <KeyboardArrowUpOutlinedIcon fontSize="small" />,
    },
    {
      platform: "Webflow",
      day: "26 March 2020, at 05:00 AM",
      price: "Pending",
      icon: <PriorityHighOutlinedIcon fontSize="small" />,
    },
  ];
  return (
    <div className="transaction">
      <div className="transaction__container">
        <Box className="first__box">
          <Typography variant="h6" className="first__box__heading">
            Your Transaction's
          </Typography>
          <Box className="firstBox__one">
            <Box>
              <DateRangeIcon fontSize="small" />
            </Box>
            <Typography variant="span">23 - 30 March 2020</Typography>
          </Box>
        </Box>
        <div className="newest">
          <Box className="box__heading">
            <Typography className="heading" variant="span">
              NEWEST
            </Typography>
          </Box>
          <List className="list">
            {newestData.map((data) => {
              return (
                <ListItem className="list__item">
                  <Box className="upper__box">
                    <Box className="left__box">
                      <Box className="leftBox__first red__button">
                        <Button>{data.icon}</Button>
                      </Box>
                      <Box className="leftBox__second">
                        <Typography className="paltform" variant="span">
                          {data.platform}
                        </Typography>
                        <Typography className="theday" variant="span">
                          {data.day}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="span" className="right__box red__span">
                      {data.price}
                    </Typography>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className="newest">
          <Box className="box__heading">
            <Typography className="heading" variant="span">
              YESTERDAY
            </Typography>
          </Box>
          <List className="list">
            {yesterdayData.map((data) => {
              return (
                <ListItem className="list__item">
                  <Box className="upper__box">
                    <Box className="left__box">
                      <Box className="leftBox__first gay__button">
                        <Button>{data.icon}</Button>
                      </Box>
                      <Box className="leftBox__second">
                        <Typography className="paltform" variant="span">
                          {data.platform}
                        </Typography>
                        <Typography className="theday" variant="span">
                          {data.day}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="span"
                      className="right__box gray__span"
                    >
                      {data.price}
                    </Typography>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
