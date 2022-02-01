import React from "react";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import "./AdminBanner.css";

const AdminBanner = () => {
  return (
    <div className="admin__banner">
      <div className="banner__container">
        <div className="banner__left">
          <img
            src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/5ded990bf88fbc8b4a3a36be_5d1ac944bc10249b7842998c_featured-image-export-v0.1.png"
            alt="back-img"
          />
          <div className="bannerLeft__info">
            <div className="top">
              <p>welcom back,</p>
              <h2>Mark Johnson</h2>
              <p>Glad to see you again!</p>
              <p>Ask me anything.</p>
            </div>
            <p>
              Tap to record
              <span>
                <ArrowRightAltOutlinedIcon />
              </span>
            </p>
          </div>
        </div>
        <div className="rest__banner">
          <div className="banner__middle">
            <div>
              <h3>Satisfaction Rate</h3>
              <p>From all projects</p>
            </div>
            <div className="face">
              <TagFacesOutlinedIcon />
            </div>
            <div className="percentage">
              <img
                src="https://www.freeiconspng.com/uploads/circle-png-0.png"
                alt="circle png"
              />
              <div className="percent">
                <p>0%</p>
                <div className="middle__p">
                  <p>95%</p>
                  <p>Based on likes</p>
                </div>
                <p>100%</p>
              </div>
            </div>
          </div>
          <div className="banner__right">
            <div className="upper__banner">
              <h3>Referral Tracking</h3>
              <MoreHorizOutlinedIcon />
            </div>
            <div className="bottom__banner">
              <div className="invites__bonus">
                <div className="invites">
                  <p>Invited</p>
                  <h4>145 people</h4>
                </div>
                <div className="bonus">
                  <p>Bonus</p>
                  <h4>1.465</h4>
                </div>
              </div>
              <div className="safety">
                <p>Safety</p>
                <h2>9.3</h2>
                <h5>Total Score</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBanner;
