import React, { useState } from "react";
import style from "./FeedUserContainer.module.css";
import { feedUsers } from "../../assets/data/data";
import ModalContainer from "../../components/common/ModalContainer";

interface User {
  id: number;
  name: string;
  email: string;
  image: string;
  nickName: string;
  note: string;
  todayUpdate: boolean;
}
interface UserContainerProps {
  onSelectUser: (user: User) => void;
}

const FeedUserContainer: React.FC<UserContainerProps> = ({ onSelectUser }) => {
  return (
    <div className={style.userContainer}>
      {/* FlatList - 추천 유저 리스트 */}
      {/* 이미지 */}
      {/* 유저 닉네임 */}
      {/* 유저 한줄소개 */}
      {feedUsers.map((user, index) => (
        <div
          className={style.innerContainer}
          key={user.id}
          onClick={() => onSelectUser(user)}
        >
          <text>{index + 1}</text>
          <img
            className={style.userImage}
            src={user.image}
            alt={user.nickName}
          />
          <div className={style.userInfo}>
            <text className={style.nickName}>{user.nickName}</text>
            <text className={style.note}>{user.note}</text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedUserContainer;
