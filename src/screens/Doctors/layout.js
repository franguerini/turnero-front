import React, { Component } from "react";

import DoctorBox from "./../../shared/components/DoctorBox";
import imgDoctor from "./../../assets/doctor.png";
import imgHistory from "./../../assets/historial.png";

import ROUTES from "./../../constants/routes";

import "./styles.scss";

const doctors = [
  { id: 1, name: "Juan Perez", speciality: "Traumatologia", image: imgDoctor },
  {
    id: 2,
    name: "Martin Rod",
    speciality: "Psiquiatra",
    image: imgDoctor
  },
  { id: 3, name: "Jazmin Lopez", speciality: "Pediatra", image: imgDoctor },
  {
    id: 4,
    name: "Clauida Lint",
    speciality: "Traumatologia",
    image: imgDoctor
  },
  {
    id: 5,
    name: "Arturo Kode",
    speciality: "Oftalmologia",
    image: imgDoctor
  },
  { id: 6, name: "Marcos Shultz", speciality: "Clinico", image: imgDoctor },
  { id: 7, name: "Marta Tomar", speciality: "Clinico", image: imgDoctor },
  { id: 8, name: "Claudio Roma", speciality: "Oftalmologia", image: imgDoctor },
  { id: 9, name: "Julian Alvarez", speciality: "Nutricion", image: imgDoctor }
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
