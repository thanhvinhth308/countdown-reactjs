import React, { useState } from "react";
import CommandButton from "./components/CommandButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Timer from "./components/Timer";
import styles from "./Countdown.module.css";
Countdown.propTypes = {};

function Countdown(props) {
  const [initialSecond, setInitialSecond] = useState(0);
  const [initialMinute, setInitialMinute] = useState(0);
  const [initialHour, setInitialHour] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isRestarted, setIsRestarted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const handleNewInput = (newInput) => {
    if (newInput > 0) {
      //tính toàn lại thời gian trong trường hợp người nhập,nhập phút >60 và giây>60
      const lastTwoDigits = newInput % 100;
      const middleTwoDigits = Math.floor((newInput % 10000) / 100);
      const firstTwoDigits = Math.floor(newInput / 10000);
      if (lastTwoDigits >= 60) {
        setInitialMinute((initialMinute) => initialMinute + 1);
        setInitialSecond(lastTwoDigits - 60);
      } else {
        setInitialSecond(lastTwoDigits);
      }
      if (middleTwoDigits >= 60) {
        setInitialHour((initialHour) => initialHour + 1);
        setInitialMinute(
          (initialMinute) => initialMinute + middleTwoDigits - 60
        );
      } else {
        setInitialMinute((initialMinute) => initialMinute + middleTwoDigits);
      }
      setInitialHour((initialHour) => initialHour + firstTwoDigits);
    } else {
      setInitialHour(0);
      setInitialMinute(0);
      setInitialSecond(0);
    }
  };
  //xử lý các sự kiên start,pause,clear
  const handleTimeStart = (isStarted) => {
    setIsStarted(isStarted);
  };
  const handleTimePause = (isPaused) => {
    setIsPaused(isPaused);
  };
  const handleTimeRestart = (isClear) => {
    setIsRestarted(isClear);
  };
  const handleBackClick = () => {
    setIsReady(false);
    setIsStarted(false);
    setIsPaused(false);
    setInitialHour(0);
    setInitialMinute(0);
    setInitialSecond(0);
  };
  const handleReadyStatus = (isReady) => {
    setIsReady(isReady);
  };
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <Header />
        {isReady ? (
          <div>
            <Timer
              timeInformation={{ initialHour, initialMinute, initialSecond }}
              isPaused={isPaused}
              isRestarted={isRestarted}
              isStarted={isStarted}
            />
            <CommandButton
              onStart={handleTimeStart}
              onPause={handleTimePause}
              onRestart={handleTimeRestart}
            />
          </div>
        ) : (
          <Keyboard onChange={handleNewInput} onReady={handleReadyStatus} />
        )}
        <Footer isReady={isReady} onClick={handleBackClick} />
      </div>
    </div>
  );
}

export default Countdown;
