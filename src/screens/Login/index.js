import React, { Component } from "react";

import Layout from "../../shared/components/Layout";
import LoginForm from "./layout";
import "./styles.scss";

class Login extends Component {
  render() {
    return (
      <Layout>
        <LoginForm />
      </Layout>
    );
  }
}

export default Login;
