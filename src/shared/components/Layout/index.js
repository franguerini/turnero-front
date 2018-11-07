import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";

class Layout extends Component {
  render() {
    const { children } = this.props;
    console.log(children);

    return (
      <Fragment>
        <Navbar />
        {children}
      </Fragment>
    );
  }
}

export default Layout;
