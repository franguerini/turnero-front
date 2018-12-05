import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";

import InfoContainer from "./../../shared/components/InfoContainer";
import NextAppointments from "./../../shared/components/NextAppointments";
import NextAppointment from "./../../shared/components/NextAppointment";
import ButtonRedirect from "./../../shared/components/ButtonRedirect";
import imgDoctor from "./../../assets/doctor.png";
import imgHistory from "./../../assets/historial.png";

import ROUTES from "./../../constants/routes";

import "./styles.scss";

class HomeView extends Component {
  compare(a, b) {
    if (a.dateMom < b.dateMom) return -1;
    if (a.dateMom > b.dateMom) return 1;
    return 0;
  }

  cancelarTurno = () => {
    const turnos = JSON.parse(localStorage.getItem("turnos"));
    const nuevosTurnos = turnos.slice(0);
    nuevosTurnos.shift();
    this.setState({
      turnos: nuevosTurnos
    });
    localStorage.setItem("turnos", JSON.stringify(nuevosTurnos));
  };

  componentWillMount() {
    const email = JSON.parse(localStorage.getItem("email"))
      ? JSON.parse(localStorage.getItem("email"))
      : false;
    const turnos = JSON.parse(localStorage.getItem("turnos"));
    turnos.sort(this.compare);
    this.setState({ turnos, email });
  }

  render() {
    if (!this.state.email) return <Redirect to={ROUTES.LOGIN()} />;
    return (
      <div className="home">
        {console.log(this.state)}
        <div className="home-top-container">
          {this.state.turnos[0] && (
            <InfoContainer>
              <NextAppointment
                turno={this.state.turnos[0]}
                cancelarTurno={this.cancelarTurno}
              />
            </InfoContainer>
          )}
          {this.state.turnos.length > 1 && (
            <InfoContainer>
              <NextAppointments
                turnos={this.state.turnos.splice(1, this.state.turnos.length)}
              />
            </InfoContainer>
          )}
        </div>
        <div className="home-bottom-container">
          <ButtonRedirect
            image={imgDoctor}
            text="Ver cartilla"
            route={ROUTES.DOCTORS()}
          />
          <ButtonRedirect
            image={imgHistory}
            text="Ver Historial"
            route={ROUTES.HISTORY()}
          />
        </div>
      </div>
    );
  }
}

export default HomeView;
