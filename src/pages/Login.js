import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/login.module.css";

function handleLogin(nav, username, password) {
  let isLoginSuccessful = username === "cdawgy" && password === "pass";
  if (isLoginSuccessful) {
    nav("/home");
  } else {
    alert("login creds wrong");
  }
}

function LoginPage() {
  const navigate = useNavigate();
  let username;
  let password;
  return (
    <div className={styles.loginForm}>
      <div className={styles.icon} />
      <div className={styles.wrapper}>
        <p className={styles.formTitle}>Username</p>
        <input
          className={styles.formInput}
          type="text"
          onChange={(e) => {
            username = e.target.value;
          }}
        />
        <p className={styles.formTitle}>Password</p>
        <input
          className={styles.formInput}
          type="password"
          onChange={(e) => {
            password = e.target.value;
          }}
        />
        <p
          className={styles.loginButton}
          onClick={() => handleLogin(navigate, username, password)}
        >
          Login
        </p>
        <p className={styles.signUp}>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
