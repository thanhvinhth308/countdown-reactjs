import React from "react";
import styles from "./Footer.module.css";
function Footer(props) {
  const { onClick, isReady } = props;
  const handleBackClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className={styles.footer}>
      {isReady ? (
        <button className={styles.button} onClick={handleBackClick}>
          Back
        </button>
      ) : (
        <div style={{ height: "15px" }}></div>
      )}
    </div>
  );
}

export default Footer;
