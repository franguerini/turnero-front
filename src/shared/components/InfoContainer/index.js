import React, { Component } from "react";
import NextAppointments from "./../NextAppointments";
import "./styles.scss";

class InfoContainer extends Component {
  render() {
    return <div className="info-container">{this.props.children}</div>;
  }
}

export default InfoContainer;
