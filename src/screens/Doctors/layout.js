import React, { Component } from "react";

import DoctorBox from "./../../shared/components/DoctorBox";
import imgDoctor from "./../../assets/doctor.png";
import imgHistory from "./../../assets/historial.png";

import ROUTES from "./../../constants/routes";

import "./styles.scss";

const doctors = [
  { id: 1, name: "Juan Perez", speciality: "Traumatologia", image: imgDoctor },
  { id: 2, name: "Juan Perez", speciality: "Traumatologia", image: imgDoctor },
  { id: 3, name: "Juan Perez", speciality: "Traumatologia", image: imgDoctor },
  { id: 4, name: "Juan Perez", speciality: "Traumatologia", image: imgDoctor },
  { id: 5, name: "Juan Perez", speciality: "Traumatologia", image: imgDoctor },
  { id: 6, name: "Juan Perez", speciality: "Traumatologia", image: imgDoctor },
  { id: 7, name: "Juan Perez", speciality: "Traumatologia", image: imgDoctor },
  { id: 8, name: "Juan Perez", speciality: "Traumatologia", image: imgDoctor },
  { id: 9, name: "Juan Perez", speciality: "Traumatologia", image: imgDoctor }
];

class DoctorsView extends Component {
  render() {
    return (
      <div className="doctors-container">
        <span className="doctors-title">Cartilla de medicos</span>
        <div className="doctors-list-container">
          {doctors.map(doctor => (
            <DoctorBox doctor={doctor} />
          ))}
        </div>
      </div>
    );
  }
}

export default DoctorsView;
