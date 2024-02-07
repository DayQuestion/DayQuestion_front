import React, { useState } from "react";
import styles from "./FriendsPage.module.css";
import SearchHm from "../../components/common/Search_hm";
import QuestionContainer from "../../components/common/QuestionContainer";
import AnswerContainer from "../../components/common/AnswerContainer";
import UserContainer from "../../components/common/UserContainer";
import UserHeader from "../../components/common/UserHeader";
import Nav from "../../components/common/Nav";

function FriendsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section className={styles.feed}>
      <div className={styles.container}>
        <div className={styles.left}>
          <SearchHm />
          <UserContainer />
          <Nav />
        </div>
        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <UserHeader />
          </div>
          <div className={styles.rightContent}>
            <QuestionContainer date={selectedDate} />
            <AnswerContainer />
            <AnswerContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FriendsPage;
