import React, { Component } from "react";

import InfoContainer from "./../../shared/components/InfoContainer";
import NextAppointments from "./../../shared/components/NextAppointments";
import NextAppointment from "./../../shared/components/NextAppointment";
import ButtonRedirect from "./../../shared/components/ButtonRedirect";
import imgDoctor from "./../../assets/doctor.png";
import imgHistory from "./../../assets/historial.png";

import ROUTES from "./../../constants/routes";

import "./styles.scss";

class HomeView extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-top-container">
          <InfoContainer>
            <NextAppointment />
          </InfoContainer>
          <InfoContainer>
            <NextAppointments />
          </InfoContainer>
        </div>
        <div className="home-bottom-container">
          <ButtonRedirect
            image={imgDoctor}
            text="Ver cartilla"
            route={ROUTES.DOCTORS()}
          />
          <ButtonRedirect
            image={imgHistory}
            text="Ver cartilla"
            route={ROUTES.DOCTORS()}
          />
        </div>
      </div>
    );
  }
}

export default HomeView;
