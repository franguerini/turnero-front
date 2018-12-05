import React, { Component } from "react";
import "./styles.scss";

const appointments = [
  {
    id: 1,
    date: "05/12/2018",
    time: "12:00"
  },
  {
    id: 2,
    date: "05/11/2018",
    time: "15:00"
  },
  {
    id: 3,
    date: "3/10/2018",
    time: "9:00"
  }
];

class PrevAppointments extends Component {
  render() {
    return (
      <div className="appointment-container-prev">
        <span className="appointment-title">Historial de Turnos</span>
        {this.props.turnos.map(appointment => (
          <div className="next-appointment-container">
            <span className="next-appointment-element">
              {appointment.doctor}
            </span>
            <span className="next-appointment-element">{appointment.date}</span>
            <span className="next-appointment-element">{appointment.time}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default PrevAppointments;
