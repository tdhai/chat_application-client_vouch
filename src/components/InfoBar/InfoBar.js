import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <a href="/">
        <h4 href="/">Exit</h4>
      </a>
    </div>
    <div className="middleInnerContainer">
      <h3>{room}</h3>
    </div>
  </div>
);

export default InfoBar;
