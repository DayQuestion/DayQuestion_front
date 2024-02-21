import React, { useState } from "react";
import styles from "./QnAPage.module.css";
import Search from "../../components/common/Search";
import Nav from "../../components/common/Nav";
import QuestionContainer from "../../components/common/QuestionContainer";
import AnswerContainer from "../../components/common/AnswerContainer";
import { AiOutlineSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdFiberManualRecord } from "react-icons/md";
import DailyCalendar from "../../components/Calendar/DailyCalendar";

import MessageForm from "../../components/MessageForm/MessageForm";

const QnAPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <section className={styles.feed}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Search />
          <div className={styles.leftUsers}>
            <DailyCalendar onDateSelect={handleDateChange} />
          </div>
          <div className={styles.leftFooter}>
            <Nav />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <MdFiberManualRecord className={styles.recordIcon} />
            <h2>Day_Question</h2>
            <button
              onClick={() => {
                navigate("/myPage");
              }}
            >
              <AiOutlineSetting />
            </button>
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
