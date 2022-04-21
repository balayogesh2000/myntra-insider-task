import React from "react";

import "./BenefitsList.css";

const BenefitsList = () => {
  return (
    <div class="benefits-list-wrapper">
      <h3 class="enroll-title" style={{ "margin-bottom": "32px" }}>
        Benefits Of Joining The Program
      </h3>
      <div class="benefits-list-container">
        <div class="benefits-list-item">
          <img
            src="https://assets.myntassets.com/assets/images/retaillabs/2021/5/27/3e765afa-de7c-44dd-9379-5c12e7a5c6971622109794253-Early-access-to-sale-3x--1-.png"
            alt="Early Access to The Sales"
          />
          <h4>Early Access to The Sales</h4>
        </div>
        <div class="benefits-list-item">
          <img
            src="https://assets.myntassets.com/assets/images/retaillabs/2021/5/27/8cb20882-94ba-464f-9d76-0a4004a52fbe1622110065196-Slice-26-3x.png"
            alt="Insider Exclusive Rewards &amp; Benefits"
          />
          <h4>Insider Exclusive Rewards &amp; Benefits</h4>
        </div>
        <div class="benefits-list-item">
          <img
            src="https://assets.myntassets.com/assets/images/retaillabs/2021/5/27/7e042b1c-9d95-4b99-bf14-ef76129870e91622110123552-Slice-26-3x.png"
            alt="Priority Customer Support"
          />
          <h4>Priority Customer Support</h4>
        </div>
      </div>
    </div>
  );
};

export default BenefitsList;
