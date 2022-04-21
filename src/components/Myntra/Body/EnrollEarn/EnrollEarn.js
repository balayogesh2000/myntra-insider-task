import React from "react";

import "./EnrollEarn.css";

const EnrollEarn = () => {
  return (
    <>
      <h3 class="enroll-title">How does it work</h3>
      <div class="enroll-earn-text">
        <div>Earn SuperCoins with every purchase.</div>
        <div>You can get upto 3 SuperCoins for every ₹100 spent</div>
      </div>
      <div class="enroll-earn-wrapper">
        <div class="enroll-earn-container">
          <img
            src="https://assets.myntassets.com/assets/images/retaillabs/2021/8/23/c6ad63ed-3ede-479a-bd90-1a9e10d1ec2b1629703772595-t-2x.png"
            alt="tiers"
          />
        </div>
        <div class="enroll-earn-upgrade-container">
          <div class="enroll-earn-upgrade">
            <img src="https://assets.myntassets.com/assets/images/retaillabs/2021/5/27/1ff784f4-042a-430e-8b0e-acbb8d9d365e1622110908935-Upgrade-3x.png" />
            <p>Shop on Myntra to Upgrade your tier</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollEarn;
