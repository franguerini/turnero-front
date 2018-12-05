import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { logged: false };
  }

  login = email => {
    localStorage.setItem("email", JSON.stringify(email));
    this.setState({ logged: true });
  };

  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    if (this.state.logged) return <Redirect to={"/"} />;
    return (
      <div className="login-form-container">
        <div name="loginForm">
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
            <button onClick={() => this.login(email)} className="form-submit">
              LOGIN
            </button>
          </div>
        </div>
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

export default connect(mapStateToProps)(LoginForm);
