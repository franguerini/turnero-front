import React, { Component } from "react";
import NextAppointments from "./../NextAppointments";
import "./styles.scss";

class InfoContainer extends Component {
  render() {
    return (
      <div className="info-container">
        <NextAppointments />
      </div>
    );
  }
}

export default InfoContainer;
