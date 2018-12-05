import React, { Component } from "react";
import moment from "moment";
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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="appointment-container">
        <span className="appointment-title">Proximo Turno</span>
        <div className="next-appointment-container">
          <span className="next-appointment-element">{`Fecha: ${this.props
            .turno && this.props.turno.date}`}</span>
          <span className="next-appointment-element">{`Hora: ${this.props
            .turno && this.props.turno.time}`}</span>
        </div>
        <div className="next-appointment-info-container">
          <span className="next-appointment-info-element">{`Direccion: ${this
            .props.turno && appointment.address}`}</span>
          <span className="next-appointment-info-element">{`Anunciarse en: ${this
            .props.turno && appointment.room}`}</span>
          <span className="next-appointment-info-element">{`Medico: ${this.props
            .turno && this.props.turno.doctor}`}</span>
          <button
            onClick={this.props.cancelarTurno}
            className="next-appointment-info-element-cancel"
          >
            Cancelar Turno
          </button>
        </div>
      </div>
    );
  }
}

export default NextAppointment;
