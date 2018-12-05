import React, { Component } from "react";

import PrevAppointments from "./../../shared/components/PrevAppointments";
import InfoContainer from "./../../shared/components/InfoContainer";
import imgDoctor from "./../../assets/doctor.png";
import imgHistory from "./../../assets/historial.png";

import ROUTES from "./../../constants/routes";

import "./styles.scss";

const turnos = [
  {
    id: 1,
    date: "05/12/2018",
    time: "12:00",
    doctor: "Juan Perez"
  },
  {
    id: 2,
    date: "20/12/2018",
    time: "15:00",
    doctor: "Juan Perez"
  },
  {
    id: 3,
    date: "04/01/2019",
    time: "9:00",
    doctor: "Arturo Lopez"
  }
];

class HistoryView extends Component {
  render() {
    return (
      <div className="prev-turnos-container">
        {turnos && (
          <InfoContainer>
            <PrevAppointments turnos={turnos} />
          </InfoContainer>
        )}
      </div>
    );
  }
}

export default HistoryView;
