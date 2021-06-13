import React from "react";
import { checkToken } from "../../utils/localStorage";
import styles from "./Header.module.css";
function Header({ onLogout, user }) {
  return (
    <div className={styles.box}>
      {checkToken() !== null ? (
        <div className={styles.container}>
          <div className={styles.title}>Hello {user.username}</div>
          <button className={styles.button} onClick={onLogout}>
            Log out
          </button>
        </div>
      ) : (
        <div className={styles.title}>
          <div>WWW.Online-Stopwatch.com</div>
        </div>
      )}
    </div>
  );
}

export default Header;
