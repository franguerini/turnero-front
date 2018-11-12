import React, { Component } from "react";

import Layout from "../../shared/components/Layout";
import DoctorsView from "./layout";
import "./styles.scss";

class Doctors extends Component {
  render() {
    return (
      <Layout>
        <DoctorsView />
      </Layout>
    );
  }
}

export default Doctors;
