import React from "react";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import { MdFiberManualRecord } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

const LoginPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <MdFiberManualRecord className={styles.recordIcon} />
          <h1>Day_Question</h1>
        </div>
        <form className={styles.form_container}>
          <h2>login</h2>
          <input type="text" placeholder="email" id="email" />
          <input type="password" placeholder="password" id="password" />
          <div className={styles.linkBox}>
            <button type="submit">Login</button>
            <Link to={"/dailyPage"}>게스트</Link>
            <Link to={"/signUp"}>회원가입</Link>
          </div>
          <p className={styles.social}>Social Login</p>
          <div className={styles.socialLogin}>
            <button className={styles.google}>
              <FcGoogle />
              <span>구글로 로그인</span>
            </button>
            <button className={styles.kakao}>
              <RiKakaoTalkFill />
              카카오로 로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
