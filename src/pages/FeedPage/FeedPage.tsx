import React, { useState } from "react";
import styles from "./FeedPage.module.css";
import Search from "../../components/common/Search";
import QuestionContainer from "../../components/common/QuestionContainer";
import AnswerContainer from "../../components/common/AnswerContainer";
import UserContainer from "../../components/common/UserContainer";
import Nav from "../../components/common/Nav";

function FeedPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // 현재 날짜를 가져옵니다.
  const today = new Date();

  // 원하는 형식으로 날짜를 설정합니다.
  const formattedDate = `< ${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()} >`;

  return (
    <section className={styles.feed}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Search />
          <div className={styles.leftUsers}>
            {/* TODO: FlatList - 추천 유저 리스트 */}
            {/* 순번 */}
            {/* 이미지 */}
            {/* 유저 이름 */}
            {/* 유저 한줄 소개 */}
          </div>
          <div className={styles.leftFooter}>
            <Nav />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightHeader}>{/* TODO:  날짜 선택기 */}</div>
          <div className={styles.rightContent}>
            {/* TODO:  FlatList - 날짜 별 추천 유저 답변 리스트 */}
            {/* 질문  */}
            {/* 답변 - 답변 시간, 유저 이미지, 답변 내용 */}
            <QuestionContainer date={selectedDate} />
            <AnswerContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeedPage;
