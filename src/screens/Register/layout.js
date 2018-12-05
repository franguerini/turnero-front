import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let { email, password, address, birth, medic, name } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <div className="login-form-container">
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className="form-group-collection">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                onChange={e => this.setState({ email: e.target.value })}
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                onChange={e => this.setState({ password: e.target.value })}
                value={password}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Nombre</label>
              <input
                className="form-input"
                type="text"
                name="name"
                onChange={e => this.setState({ name: e.target.value })}
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Nacimiento</label>
              <DatePicker
                className="form-input"
                selected={this.state.birth}
                onChange={date => this.setState({ birth: date })}
                value={birth}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Direccion</label>
              <input
                className="form-input"
                type="text"
                name="address"
                onChange={e => this.setState({ address: e.target.value })}
                value={address}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Plan Medico</label>
              <input
                className="form-input"
                type="text"
                name="planMedic"
                onChange={e => this.setState({ medic: e.target.value })}
                value={medic}
              />
            </div>
            <input
              className="form-submit"
              type="submit"
              value="Registrar usuario"
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

export default connect(mapStateToProps)(RegisterForm);
