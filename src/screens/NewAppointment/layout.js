import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class NewAppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChangeDate = date => {
    this.setState({ date });
  };
  handleChangeTime = time => {
    this.setState({ time });
  };

  render() {
    let { email, password, date } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <div className="login-form-container">
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className="form-group-collection">
            <div className="form-group">
              <label className="form-label">Doctor</label>
              <input
                className="form-input"
                type="text"
                name="text"
                onChange={e => this.setState({ email: e.target.value })}
                value={this.props.id}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Fecha</label>
              <DatePicker
                className="form-input"
                selected={this.state.date}
                onChange={this.handleChangeDate}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Hora</label>
              <DatePicker
                className="form-input"
                selected={this.state.time}
                onChange={this.handleChangeTime}
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
                onChange={e => this.setState({ password: e.target.value })}
                value={password}
              />
            </div>
            <input
              className="new-apointment-submit"
              type="submit"
              value="CONFIRMAR TURNO"
            />
          </div>
        </form>
      </div>
    );
  }

  onSubmit(e) {
    console.log("submit");
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
