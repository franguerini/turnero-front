import React, { Component } from "react";

import Layout from "../../shared/components/Layout";
import HomeView from "./layout";
import "./styles.scss";

class Home extends Component {
  render() {
    return (
      <Layout>
        <HomeView />
      </Layout>
    );
  }
}

export default Home;
