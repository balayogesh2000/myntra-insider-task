import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.mainHeader} style={{ zIndex: 9999 }}>
        <div className={classes.headerContent}>
          <a href="/" target="_blank">
            <img
              src="https://assets.myntassets.com/assets/images/retaillabs/2021/1/27/fbf63764-46e8-4aa1-9fdf-5d19983646e51611739436303-486f4a63-d088-4e38-8b64-e7119d6a8f2f1591176340487-myntra-new-app-icon-3x.png"
              alt="myntra"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
