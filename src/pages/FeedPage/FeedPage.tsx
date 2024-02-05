import React from "react";
import styles from "./FeedPage.module.css";
import Nav from "../../components/common/Nav";
import Search from "../../components/common/Search";
import QuestionContainer from "../../components/common/QuestionContainer";
import AnswerContainer from "../../components/common/AnswerContainer";

function FeedPage() {
  // 현재 날짜를 가져옵니다.
  const today = new Date();

  // 원하는 형식으로 날짜를 설정합니다.
  const formattedDate = `< ${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 >`;

  return (
    <section className={styles.feed}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Search />
          <div className={styles.leftUsers}>
            <h1>User</h1>
          </div>
          <div className={styles.leftFooter}>
            <Nav />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <text>{formattedDate} </text>
          </div>
          <div>
            <QuestionContainer />
          </div>
          <AnswerContainer />
          <AnswerContainer />
        </div>
      </div>
    </section>
  );
}
export default FeedPage;
