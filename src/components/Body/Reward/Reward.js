import React from "react";

import "./Reward.css";

const Reward = () => {
  return (
    <div className="reward-wrapper">
      <h3 className="enroll-title" style={{ "margin-bottom": "0px" }}>
        Rewards
      </h3>
      <div className="enroll-reward-text">
        Use your SuperCoins to get exciting rewards
      </div>
      <div className="reward-slider">
        <div className="reward-card-wrapper">
          <div className="reward-card-image">
            <div
              className="LazyLoad "
              style={{
                height: "auto",
                width: "100%",
                background: "rgb(255, 237, 243)",
              }}
            >
              <picture className="img-responsive" style={{ width: "100%" }}>
                <source
                  srcset="//assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2021/9/3/74e9ae39-2302-42e7-ad8c-917e51b2206c1630656211389-Get-Myntra-Voucher-worth-Rs.500.jpg"
                  type="image/webp"
                />
                <img
                  src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2021/9/3/74e9ae39-2302-42e7-ad8c-917e51b2206c1630656211389-Get-Myntra-Voucher-worth-Rs.500.jpg"
                  className="img-responsive preLoad loaded"
                  alt=""
                  title=""
                  style={{ width: "100%" }}
                />
              </picture>
            </div>
          </div>
          <div className="reward-card-info">
            <p className="reward-card-title">Get Myntra Voucher worth Rs.500</p>
          </div>
        </div>
        <div className="reward-card-wrapper">
          <div className="reward-card-image">
            <div
              className="LazyLoad "
              style={{
                height: "auto",
                width: "100%",
                background: "rgb(255, 242, 223)",
              }}
            >
              <picture className="img-responsive" style={{ width: "100%" }}>
                <source
                  srcset="//assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2021/9/3/4ef867c9-1129-4e3c-98c8-b67711845e421630656211382-Get-Leivs-Voucher-worth-Rs.-500.jpg"
                  type="image/webp"
                />
                <img
                  src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2021/9/3/4ef867c9-1129-4e3c-98c8-b67711845e421630656211382-Get-Leivs-Voucher-worth-Rs.-500.jpg"
                  className="img-responsive preLoad loaded"
                  alt=""
                  title=""
                  style={{ width: "100%" }}
                />
              </picture>
            </div>
          </div>
          <div className="reward-card-info">
            <p className="reward-card-title">
              Get Levi's Voucher worth Rs. 500
            </p>
          </div>
        </div>
        <div className="reward-card-wrapper">
          <div className="reward-card-image">
            <div
              className="LazyLoad "
              style={{
                height: "auto",
                width: "100%",
                background: "rgb(255, 237, 243)",
              }}
            ></div>
          </div>
          <div className="reward-card-info">
            <p className="reward-card-title">
              Get SonyLiv Premium 1 Month Subscription
            </p>
          </div>
        </div>
        <div className="reward-card-wrapper">
          <div className="reward-card-image">
            <div
              className="LazyLoad "
              style={{
                height: "auto",
                width: "100%",
                background: "rgb(244, 255, 249)",
              }}
            ></div>
          </div>
          <div className="reward-card-info">
            <p className="reward-card-title">
              Get Tokyo Talkies Voucher worth Rs.400
            </p>
          </div>
        </div>
        <div className="reward-card-wrapper">
          <div className="reward-card-image">
            <div
              className="LazyLoad "
              style={{
                height: "auto",
                width: "100%",
                background: "rgb(255, 242, 223)",
              }}
            ></div>
          </div>
          <div className="reward-card-info">
            <p className="reward-card-title">
              Get FLAT 12% OFF on Flipkart Flight Bookings
            </p>
          </div>
        </div>
        <div className="reward-card-wrapper">
          <div className="reward-card-image">
            <div
              className="LazyLoad "
              style={{
                height: "auto",
                width: "100%",
                background: "rgb(255, 242, 223)",
              }}
            ></div>
          </div>
          <div className="reward-card-info">
            <p className="reward-card-title">
              Get 50% off (upto ₹200/-) on your first order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
