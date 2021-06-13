import React, { useState } from "react";
import styles from "./CommandButton.module.css";
function CommandButton(props) {
  const { onStart, onPause, onRestart } = props;
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const handleStartClick = () => {
    onStart(true);
    onRestart(false);
    setIsActive(true);
  };
  const handlePauseButton = () => {
    onPause(true);
    setIsPaused(true);
  };
  const handleContinueButton = () => {
    onPause(false);
    setIsPaused(false);
  };
  const handleClearButton = () => {
    onRestart(true);
    onPause(false);
    setIsActive(false);
    setIsPaused(false);
  };
  return (
    <div className={styles.container}>
      {!isActive && (
        <button className={styles.buttonPrimary} onClick={handleStartClick}>
          Start
        </button>
      )}
      {isActive && !isPaused && (
        <button className={styles.buttonPrimary} onClick={handlePauseButton}>
          Pause
        </button>
      )}
      {isPaused && (
        <button
          className={styles.buttonContinue}
          onClick={handleContinueButton}
        >
          Continue
        </button>
      )}
      <button className={styles.buttonWarning} onClick={handleClearButton}>
        Clear
      </button>
    </div>
  );
}

export default CommandButton;
