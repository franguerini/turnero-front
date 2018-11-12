import React, { Component } from "react";

import Layout from "../../shared/components/Layout";
import RegisterForm from "./layout";
import "./styles.scss";

class Register extends Component {
  render() {
    return (
      <Layout>
        <RegisterForm />
      </Layout>
    );
  }
}

export default Register;
