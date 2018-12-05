import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class NewAppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { doctor: this.props.match.params.name };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    let turnos = JSON.parse(localStorage.getItem("turnos"));
    if (!turnos) turnos = [];
    turnos.push(this.state);
    localStorage.setItem("turnos", JSON.stringify(turnos));
    this.setState({ submit: true });
  }

  handleChangeDate = date => {
    this.setState({ date });
  };
  handleChangeTime = time => {
    this.setState({ time });
  };

  render() {
    let { doctor, date, time, coment, submit, dateMom } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <div className="login-form-container">
        <div>
          <div className="form-group-collection">
            <div className="form-group">
              <label className="form-label">Doctor</label>
              <input
                className="form-input"
                type="text"
                name="text"
                value={this.props.match.params.name}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Fecha</label>
              <DatePicker
                className="form-input"
                minDate={moment()}
                selected={this.state.dateMom}
                onChange={dateMom =>
                  this.setState({ date: dateMom.format("LL"), dateMom })
                }
                value={dateMom}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Hora</label>
              <DatePicker
                className="form-input"
                selected={this.state.timeMom}
                onChange={timeMom =>
                  this.setState({ time: timeMom.format("hh:mm a"), timeMom })
                }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="LT"
                timeCaption="Time"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Comentario</label>
              <input
                className="form-input"
                type="text"
                name="comment"
                onChange={e => this.setState({ coment: e.target.value })}
                value={coment}
              />
            </div>
            <button onClick={this.onSubmit} className="new-apointment-submit">
              CONFIRMAR TURNO
            </button>
          </div>
        </div>
        {submit && (
          <span className="exito">
            Turno generado con {this.props.match.params.name}, el dia{" "}
            {this.state.date && this.state.date} a las{" "}
            {this.state.time && this.state.time}
          </span>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

export default connect(mapStateToProps)(NewAppointmentForm);
