import React, { useState } from "react";
import DisplayScreen from "./DisplayScreen";
import styles from "./Keyboard.module.css";
Keyboard.propTypes = {};

function Keyboard(props) {
  const { onChange, onReady } = props;
  const [inputNumber, setInputNumber] = useState("");
  const handleButtonClick = (e) => {
    //xử lý sự kiện của các button để nhập input
    switch (e.target.value) {
      case "clear": {
        setInputNumber("");
        onChange(0);
        break;
      }
      case "set": {
        if (onChange) {
          onChange(parseInt(inputNumber));
          onReady(true);
        }
        break;
      }
      default: {
        if (inputNumber.length >= 6) return;
        setInputNumber((inputNumber) => inputNumber + e.target.value);
      }
    }
  };
  return (
    <div className={styles.container}>
      <DisplayScreen inputNumber={inputNumber} />
      <div className={styles.rowButton}>
        <button className={styles.button} onClick={handleButtonClick} value={5}>
          5
        </button>
        <button
          className={styles.button}
          onClick={handleButtonClick}
          value={"6"}
        >
          6
        </button>
        <button
          className={styles.button}
          onClick={handleButtonClick}
          value={"7"}
        >
          7
        </button>
        <button
          className={styles.button}
          onClick={handleButtonClick}
          value={"8"}
        >
          8
        </button>
        <button
          className={styles.button}
          onClick={handleButtonClick}
          value={"9"}
        >
          9
        </button>
        <button
          className={styles.buttonSet}
          onClick={handleButtonClick}
          value={"set"}
        >
          Set
        </button>
      </div>
      <div className={styles.rowButton}>
        <button
          className={styles.button}
          onClick={handleButtonClick}
          value={"0"}
        >
          0
        </button>
        <button
          className={styles.button}
          onClick={handleButtonClick}
          value={"1"}
        >
          1
        </button>
        <button
          className={styles.button}
          onClick={handleButtonClick}
          value={"2"}
        >
          2
        </button>
        <button
          className={styles.button}
          onClick={handleButtonClick}
          value={"3"}
        >
          3
        </button>
        <button
          className={styles.button}
          onClick={handleButtonClick}
          value={"4"}
        >
          4
        </button>
        <button
          className={styles.buttonClear}
          onClick={handleButtonClick}
          value={"clear"}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
