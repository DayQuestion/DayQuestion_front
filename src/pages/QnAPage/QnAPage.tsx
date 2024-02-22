import React, { useState } from "react";
import styles from "./QnAPage.module.css";
import Search from "../../components/common/Search";
import Nav from "../../components/common/Nav";
import QuestionContainer from "../../components/common/QuestionContainer";
import AnswerContainer from "../../components/common/AnswerContainer";
import { MdFiberManualRecord } from "react-icons/md";
import DailyCalendar from "../../components/Calendar/DailyCalendar";
import MessageForm from "../../components/MessageForm/MessageForm";
import Header from "../../components/common/Header/Header";

const QnAPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <section className={styles.feed}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Header />
          <Search />
          <div className={styles.leftUsers}>
            <DailyCalendar onDateSelect={handleDateChange} />
            <span>연속 ?일째 작성 중 🔥</span>
          </div>
          <div className={styles.leftFooter}>
            <Nav />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <MdFiberManualRecord className={styles.recordIcon} />
            <h2>Day_Question</h2>
          </div>
          <div className={styles.rightContent}>
            <QuestionContainer date={selectedDate} />
            <AnswerContainer date={selectedDate} />
          </div>
          <MessageForm />
        </div>
      </div>
    </section>
  );
};

export default QnAPage;
