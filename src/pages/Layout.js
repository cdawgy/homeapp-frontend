import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../css/layout.module.css";

class Layout extends React.Component {
  render() {
    return <div className={styles.layoutBody}><Outlet /></div>;
  }
}

export default Layout;
