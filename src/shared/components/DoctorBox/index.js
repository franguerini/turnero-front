import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class DoctorBox extends Component {
  render() {
    const { image, name, speciality } = this.props.doctor;
    return (
      <div className="doctor-box-container">
        <img className="doctor-image" src={image} />
        <span className="doctor-name">{name}</span>
        <span className="doctor-speciality">{speciality}</span>
        <span className="doctor-request-appointment">Solicitar turno</span>
      </div>
    );
  }
}

export default DoctorBox;
