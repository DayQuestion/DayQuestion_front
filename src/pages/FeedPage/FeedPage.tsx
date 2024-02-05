import React from "react";
import styles from "./FeedPage.module.css";
import { Nav_hm } from "../../components/common/Nav_hm";
import SearchHm from "../../components/common/Search_hm";
import QuestionContainer from "../../components/common/QuestionContainer";
import AnswerContainer from "../../components/common/AnswerContainer";
import UserContainer from "../../components/common/UserContainer";

function FeedPage() {
  // 현재 날짜를 가져옵니다.
  const today = new Date();

  // 원하는 형식으로 날짜를 설정합니다.
  const formattedDate = `< ${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()} >`;

  return (
    <section className={styles.feed}>
      <div className={styles.container}>
        <div className={styles.left}>
          <SearchHm />
          <UserContainer />
          <Nav_hm />
        </div>
        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <text className={styles.rightHeaderText}>{formattedDate} </text>
          </div>
          <div className={styles.rightContent}>
            <QuestionContainer />
            <AnswerContainer />
            <AnswerContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeedPage;
