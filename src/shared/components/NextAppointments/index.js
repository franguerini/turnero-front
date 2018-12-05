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
    date: "20/12/2018",
    time: "15:00"
  },
  {
    id: 3,
    date: "04/01/2019",
    time: "9:00"
  }
];

class NextAppointments extends Component {
  render() {
    return (
      <div className="appointment-container">
        <span className="appointment-title">Proximos Turnos</span>
        {this.props.turnos.map(appointment => (
          <div className="next-appointment-container">
            <span className="next-appointment-element">{`Fecha: ${
              appointment.date
            }`}</span>
            <span className="next-appointment-element">{`Hora: ${
              appointment.time
            }`}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default NextAppointments;
