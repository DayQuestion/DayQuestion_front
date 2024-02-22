import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./QuestionContainer.module.css";
import { questions } from "../../assets/data/data";

interface QuestionContainerProps {
  date: Date;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({ date }) => {
  const formattedDate = date.toISOString().split("T")[0];

  const questionData = questions[formattedDate];

  const questionText = questionData
    ? questionData.question
    : "질문이 없습니다.";
  const questionText_en = questionData
    ? questionData.question_en
    : "No question for today.";

  return (
    <div className={styles.questionContainer}>
      <img src={logo} alt="User " className={styles.questionimage} />
      <div className={styles.qInnerContainer}>
        <div className={styles.questionBubble}>
          <text className={styles.questionText}>{questionText}</text>
          <br />
          <text className={styles.questionText}>{questionText_en}</text>
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
