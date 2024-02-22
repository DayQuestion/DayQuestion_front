import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import styles from "./AnswerContainer.module.css";

interface AnswerContainerProps {
  date: Date;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const AnswerContainer: React.FC<AnswerContainerProps> = ({ date }) => {
  const [post, setPost] = useState<Post | null>(null);

  async function fetchPost(date: Date) {
    const postId = date.getDate();

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPost(response.data);
    } catch (error) {
      console.error("Fetch error:", error);
      setPost(null);
    }
  }

  useEffect(() => {
    fetchPost(date);
  }, [date]);

  return (
    <div className={styles.answerContainer}>
      <div className={styles.aInnerContainer}>
        <div className={styles.answerBubble}>
          {post ? (
            <p key={post.id} className={styles.answerText}>
              {post.body}
            </p>
          ) : (
            <p>답변이 아직 작성되지 않았습니다.</p>
          )}
        </div>
      </div>
      <img src={logo} alt="User" className={styles.answerImage} />
    </div>
  );
};

export default AnswerContainer;
