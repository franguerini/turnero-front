import React, { Component } from "react";
import "./styles.scss";

const appointment = {
  id: 1,
  date: "05/12/2018",
  time: "12:00",
  address: "Paseo Colon 850",
  room: "3er Piso",
  speciality: "Traumatologia",
  doctor: "Ramon Martinez"
};

class NextAppointment extends Component {
  render() {
    return (
      <div className="appointment-container">
        <span className="appointment-title">Proximo Turno</span>
        <div className="next-appointment-container">
          <span className="next-appointment-element">{`Fecha: ${
            appointment.date
          }`}</span>
          <span className="next-appointment-element">{`Hora: ${
            appointment.time
          }`}</span>
        </div>
        <div className="next-appointment-info-container">
          <span className="next-appointment-info-element">{`Direccion: ${
            appointment.address
          }`}</span>
          <span className="next-appointment-info-element">{`Anunciarse en: ${
            appointment.room
          }`}</span>
          <span className="next-appointment-info-element">{`Especialidad: ${
            appointment.speciality
          }`}</span>
          <span className="next-appointment-info-element">{`Medico: ${
            appointment.doctor
          }`}</span>
        </div>
      </div>
    );
  }
}

export default NextAppointment;
