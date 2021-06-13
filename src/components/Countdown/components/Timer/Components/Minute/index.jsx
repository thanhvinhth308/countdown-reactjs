import React from "react";
import styles from "../Box.module.css";
Minute.propTypes = {};

function Minute(props) {
  const { minute } = props;
  return <div className={styles.container}>{minute}</div>;
}

export default Minute;
