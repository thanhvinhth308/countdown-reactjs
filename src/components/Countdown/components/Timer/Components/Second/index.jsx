import React from "react";
import styles from "../Box.module.css";
Second.propTypes = {};

function Second(props) {
  const { second } = props;
  return <div className={styles.container}>{second}</div>;
}

export default Second;
