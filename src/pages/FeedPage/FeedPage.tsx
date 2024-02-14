import React, { useState } from "react";
import styles from "./FeedPage.module.css";
import Search from "../../components/common/Search";
import QuestionContainer from "../../components/common/QuestionContainer";
import AnswerContainer from "../../components/common/AnswerContainer";
import Nav from "../../components/common/Nav";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import { friendsFeeds } from "../../assets/data/data";
import UserContainer from "../../components/common/UserContainer";
import FeedUserContainer from "./FeedUserContainer";

interface User {
  id: number;
  name: string;
  email: string;
  image: string;
  nickName: string;
  note: string;
  todayUpdate: boolean;
}

function FeedPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // 날짜 포멧팅
  const formattedDate = `${selectedDate.getFullYear()}-0${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;

  // 전날로 이동
  const prevDate = () => {
    setSelectedDate((currentDate) => {
      const prevDay = new Date(currentDate);
      prevDay.setDate(prevDay.getDate() - 1);
      return prevDay;
    });
  };

  // 다음날로 이동
  const nextDate = () => {
    setSelectedDate((currentDate) => {
      const nextDay = new Date(currentDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    });
  };

  // 선택된 날짜의 answer들을 가져옴
  const selectedAnswers = friendsFeeds.flatMap((friend) =>
    friend.feeds
      .filter((feed) => feed.date === formattedDate)
      .map((feed) => feed.answer)
  );

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

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
            <FeedUserContainer onSelectUser={handleSelectUser} />
          </div>
          <div className={styles.leftFooter}>
            <Nav />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <button type="button" onClick={prevDate}>
              <MdArrowBackIos />
            </button>
            <text>{formattedDate}</text>
            <button type="button" onClick={nextDate}>
              <MdArrowForwardIos />
            </button>
          </div>
          <div className={styles.rightContent}>
            {/* TODO:  FlatList - 날짜 별 추천 유저 답변 리스트 */}
            {/* 질문  */}
            {/* 답변 - 답변 시간, 유저 이미지, 답변 내용 */}
            <QuestionContainer date={selectedDate} />

            <ul>
              {selectedAnswers.length > 0 ? (
                selectedAnswers.map((answer, index) => <AnswerContainer />)
              ) : (
                <li>No answers for this date</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeedPage;
