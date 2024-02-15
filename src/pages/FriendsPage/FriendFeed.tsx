import React from "react";
import styles from "./FriendFeed.module.css";
import { friendsFeeds } from "../../assets/data/data";
import QuestionContainer from "../../components/common/QuestionContainer";
import AnswerContainer from "../../components/common/AnswerContainer";
interface FriendFeedProps {
  userId?: number;
}

const FriendFeed: React.FC<FriendFeedProps> = ({ userId }) => {
  const friendFeeds = friendsFeeds.find((friend) => friend.id === userId);

  // Ensure friendFeeds is not undefined before mapping over feeds
  if (!friendFeeds) {
    return <div>텅 빔!</div>; // Or any other fallback UI
  }

  return (
    <div className={styles.outerContainer}>
      {friendFeeds.feeds.map((friendFeed, index) => (
        <div key={index} className={styles.innerContainer}>
          <text>{friendFeed.date}</text>
          <QuestionContainer date={new Date(friendFeed.date)} />
          <AnswerContainer />
        </div>
      ))}
    </div>
  );
};

export default FriendFeed;
