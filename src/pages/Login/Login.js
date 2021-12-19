import React from "react";
import styles from "../../css/login.module.css";

class LoginPage extends React.Component {
  render() {
    return (
      <div className={styles.loginBody}>
        <div className={styles.loginForm}>
          <div className={styles.icon} />
          <div className={styles.wrapper}>
            <p className={styles.formTitle}>Username</p>
            <input className={styles.formInput} type="text" />
            <p className={styles.formTitle}>Password</p>
            <input className={styles.formInput} type="password" />
            <p className={styles.loginButton} >
              Login
            </p>
            <p className={styles.signUp}>
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
