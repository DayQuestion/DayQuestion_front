import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./QuestionContainer.module.css";

const QuestionContainer = () => {
  // 오늘의 질문을 생성합니다.
  const questionText = "내일 무엇을 할 계획인가?";
  const questionText_en = "What is your ressolution for tomorrow?";

  return (
    <div className={styles.questionContainer}>
      <img src={logo} alt="User " className={styles.questionimage} />
      <div className={styles.qInnerContainer}>
        <div className={styles.qTimeText}>05:11</div>
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
