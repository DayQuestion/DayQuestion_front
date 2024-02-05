import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./AnswerContainer.module.css";

const AnswerContainer = () => {
  // 답변을 받아옵니다.
  const answerText =
    "Est, eget est quis ornare vulputate placerat. Odio nunc vitae, vel scelerisque tortor vitae egestas. Donec lobortis mattis pellentesque nisl nibh eu. ";

  return (
    <div className={styles.answerContainer}>
      <div className={styles.aInnerContainer}>
        <div className={styles.aTimeText}>05:19</div>
        <div className={styles.answerBubble}>
          <text className={styles.answerText}>{answerText}</text>
        </div>
      </div>
      <img src={logo} alt="User " className={styles.answerImage} />
    </div>
  );
};
export default AnswerContainer;
