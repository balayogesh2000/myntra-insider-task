import React from "react";

import "./GoalCriteria.css";

const GoalCriteria = () => {
  return (
    <div className="goal-criteria-wrapper">
      <div className="goal-criteria-header">
        <h4>How To Get There</h4>
        <div className="goal-criteria-logo">
          <img
            src="https://assets.myntassets.com/assets/images/retaillabs/2021/6/10/ebb06cb9-4640-4be5-a260-a0134cdea3641623267675890-Goal-criteria1-3x.png"
            alt="logo"
            className=""
          />
        </div>
      </div>
      <div className="goal-criteria-container">
        <div className="criteria-card-wrapper">
          <img src="https://assets.myntassets.com/assets/images/retaillabs/2021/6/10/af3827a0-d814-4adf-9c64-875056c24b571623268092599-Slice-8-3x--1---1-.png" />
          <div className="criteria-card-rpc-container">
            <div className="criteria-card-rpc-amount false">₹0</div>
            <div className="criteria-card-rpc-text">You’ve Spent</div>
          </div>
          <div className="criteria-card-opc-container false">
            <div className="criteria-card-opc-amount">₹ 7000</div>
            <div className="criteria-card-opc-text">Goal</div>
          </div>
        </div>
        <div className="criteria-break-line"></div>
        <div className="criteria-card-wrapper">
          <img src="https://assets.myntassets.com/assets/images/retaillabs/2021/6/10/af3827a0-d814-4adf-9c64-875056c24b571623268092599-Slice-8-3x--1---1-.png" />
          <div className="criteria-card-rpc-container">
            <div className="criteria-card-rpc-amount false">0/5</div>
            <div className="criteria-card-rpc-text">Your Orders</div>
          </div>
          <div className="criteria-card-opc-container false">
            <div className="criteria-card-opc-amount">5</div>
            <div className="criteria-card-opc-text">Goal</div>
          </div>
        </div>
      </div>
      <div className="info-card-wrapper">
        <div className="info-dot-icon">i</div>
        <p className="info-card-text">
          You need to <strong>shop for ₹7000 more </strong> and place{" "}
          <strong>5 more orders</strong> to reach your goals
        </p>
      </div>
      <div className="ineligible-notes">
        Note: Recent purchases will only reflect in the goal once the return
        window is over
      </div>
    </div>
  );
};

export default GoalCriteria;
