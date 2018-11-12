import React, { Component } from "react";

import Layout from "../../shared/components/Layout";
import NewAppointmentForm from "./layout";
import "./styles.scss";

class NewAppointment extends Component {
  render() {
    return (
      <Layout>
        <NewAppointmentForm {...this.props} />
      </Layout>
    );
  }
}

export default NewAppointment;
