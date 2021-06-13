import React, { useCallback, useEffect, useState } from "react";
import Hour from "./Components/Hour";
import Minute from "./Components/Minute";
import Second from "./Components/Second";
import styles from "./Timer.module.css";
Timer.propTypes = {};

function Timer(props) {
  let { initialHour, initialMinute, initialSecond } = props.timeInformation;
  const { isPaused, isRestarted, isStarted } = props;
  const [second, setSecond] = useState(initialSecond);
  const [minute, setMinute] = useState(initialMinute);
  const [hour, setHour] = useState(initialHour);
  const restartTime = useCallback(() => {
    setSecond(initialSecond);
    setMinute(initialMinute);
    setHour(initialHour);
  }, [initialHour, initialMinute, initialSecond]);
  useEffect(() => {
    //xét điều kiện đã start chưa chưa
    if (isStarted) {
      //xét điều kiện có restart lại time k
      if (isRestarted) {
        restartTime();
      } else {
        //xét trường hợp có đang paused k
        if (isPaused === false) {
          var myInterval = setInterval(() => {
            //xử lý giờ phút giây đếm ngược
            if (second > 0) {
              setSecond((second) => second - 1);
            } else {
              if (minute > 0) {
                setSecond(59);
                setMinute((minute) => minute - 1);
              } else {
                if (hour > 0) {
                  setHour((hour) => hour - 1);
                  setMinute(59);
                  setSecond(59);
                } else {
                  setSecond(0);
                  setMinute(0);
                  setHour(0);
                  clearInterval(myInterval);
                  alert("Time up!!!!!!!!!!!");
                }
              }
            }
          }, 1000);
        }
      }
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [isRestarted, isPaused, isStarted, second, minute, hour, restartTime]);
  return (
    <div className={styles.container}>
      <Hour hour={hour} />
      <div className={styles.colon}>:</div>
      <Minute minute={minute} />
      <div className={styles.colon}>:</div>
      <Second second={second} />
    </div>
  );
}

export default Timer;
