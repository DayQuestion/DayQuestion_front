import React, { useState } from "react";
import styles from "./FriendsPage.module.css";
import Search from "../../components/common/Search";
import Nav from "../../components/common/Nav";
import QuestionContainer from "../../components/common/QuestionContainer";
import AnswerContainer from "../../components/common/AnswerContainer";
import UserContainer from "../../components/common/UserContainer";

function FriendsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section className={styles.feed}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Search />
          <div className={styles.leftUsers}>
            <UserContainer />
          </div>
          <div className={styles.leftFooter}>
            <Nav />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <div className={styles.friendsInfo}>
              {/* TODO: 선택한 유저 정보 Component */}
              {/* 이미지 */}
              {/* 유저이름 */}
              {/* 유저 한줄 소개 */}
            </div>
            <div className={styles.friendsData}>
              {/* TODO: 선택한 유저 정보 Component */}
              {/* 답변 수 */}
              {/* 팔로워 */}
              {/* 팔로잉 */}
            </div>
          </div>
          <div className={styles.rightContent}>
            {/* TODO: 선택한 유저 Content Component */}
            {/* FlatList- 날짜 / 질문 / 답변 */}
            <QuestionContainer date={selectedDate} />
            <AnswerContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FriendsPage;
