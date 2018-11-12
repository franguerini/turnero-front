import React, { Component } from "react";
import { connect } from "react-redux";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let { email, password } = this.state;
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
            <input className="form-submit" type="submit" value="LOGIN" />
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

export default connect(mapStateToProps)(LoginForm);
