import React from "react";
import styles from "./FriendData.module.css";
import { friendsData } from "../../assets/data/data";

// Define a TypeScript interface for the props
interface FriendDataProps {
  userId?: number;
}

const FriendData: React.FC<FriendDataProps> = ({ userId }) => {
  const friendData = friendsData.find((friend) => friend.id === userId);

  return (
    <div className={styles.outerContainer}>
      {friendData ? (
        <div className={styles.innerContainer}>
          <text>답변 수: {friendData.answers}</text>
          <text>팔로잉: {friendData.following}</text>
          <text>팔로워: {friendData.follower}</text>
        </div>
      ) : (
        <text></text>
      )}
    </div>
  );
};

export default FriendData;
