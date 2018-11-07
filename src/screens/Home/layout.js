import React, { Component } from "react";

import InfoContainer from "./../../shared/components/InfoContainer";
import "./styles.scss";

class HomeView extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-container">
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
        </div>
      </div>
    );
  }
}

export default HomeView;
