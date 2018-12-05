import React, { Component } from "react";

import Layout from "../../shared/components/Layout";
import HistoryView from "./layout";
import "./styles.scss";

class History extends Component {
  render() {
    return (
      <Layout>
        <HistoryView />
      </Layout>
    );
  }
}

export default History;
