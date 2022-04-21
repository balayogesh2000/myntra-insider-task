import React from "react";

import BenefitsList from "./BenefitsList/BenefitsList";

import "./Body.css";
import EnrollButton from "./EnrollButton/EnrollButton";
import EnrollEarn from "./EnrollEarn/EnrollEarn";
import EnrollFashion from "./EnrollFashion/EnrollFashion";
import EnrollHeader from "./EnrollHeader/EnrollHeader";
import EnrollWelcome from "./EnrollWelcome/EnrollWelcome";
import GoalCriteria from "./GoalCriteria/GoalCriteria";
import Reward from "./Reward/Reward";

const Body = () => {
  return (
    <div className="Body">
      <div className="container">
        <EnrollHeader />
        <EnrollWelcome />
        <GoalCriteria />
        <BenefitsList />
        <EnrollEarn />
        <Reward />
        <EnrollFashion />
        <EnrollButton />
      </div>
    </div>
  );
};

export default Body;
