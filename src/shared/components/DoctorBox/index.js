import React, { Component } from "react";
import { Link } from "react-router-dom";
import ROUTES from "./../../../constants/routes";
import "./styles.scss";

class DoctorBox extends Component {
  render() {
    const { image, name, speciality, id } = this.props.doctor;
    return (
      <Link
        to={ROUTES.NEWAPPOINTMENT(id)}
        style={{ textDecoration: "none" }}
        className="doctor-box-container"
      >
        <img className="doctor-image" src={image} />
        <span className="doctor-name">{name}</span>
        <span className="doctor-speciality">{speciality}</span>
        <span className="doctor-request-appointment">Solicitar turno</span>
      </Link>
    );
  }
}

export default DoctorBox;
