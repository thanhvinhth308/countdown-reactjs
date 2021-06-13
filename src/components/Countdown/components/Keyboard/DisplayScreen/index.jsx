import React from "react";
import styles from "./DisplayScreen.module.css";
DisplayScreen.propTypes = {};
function DisplayScreen(props) {
  const { inputNumber } = props;
  return (
    <div>
      {inputNumber ? (
        <div className={styles.container}>
          <div className={styles.item}>{inputNumber.slice(-6, -4) || "00"}</div>
          <div className={styles.colon}>:</div>
          <div className={styles.item}>{inputNumber.slice(-4, -2) || "00"}</div>
          <div className={styles.colon}>:</div>
          <div className={styles.item}>{inputNumber.slice(-2) || "00"}</div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.item}>00</div>
          <div className={styles.colon}>:</div>
          <div className={styles.item}>00</div>
          <div className={styles.colon}>:</div>
          <div className={styles.item}>00</div>
        </div>
      )}
    </div>
  );
}

export default DisplayScreen;
