import React from "react";
import styles from "../Box.module.css";
Hour.propTypes = {};

function Hour(props) {
  const { hour } = props;
  return <div className={styles.container}>{hour}</div>;
}

export default Hour;
