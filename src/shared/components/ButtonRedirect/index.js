import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class NextAppointments extends Component {
  render() {
    return (
      <Link to={this.props.route} className="button-container">
        <img className="button-image" src={this.props.image} />
        <span className="button-text">{this.props.text}</span>
      </Link>
    );
  }
}

export default NextAppointments;
