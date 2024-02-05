import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const RegisterPage = () => {
  return (
    <div id="form">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>- Day_Question</h1>
        </div>
        <form className={styles.form_container}>
          <h2>계정 만들기</h2>
          <span>이메일을 사용해 등록하세요.</span>
          <input type="text" placeholder="NickName" id="name" />
          <input type="text" placeholder="email" id="email" />
          <input type="password" placeholder="password" id="password" />
          <div className={styles.linkBox}>
            <Link to={"/"}>이미 회원이신가요?</Link>
            <button type="submit">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
