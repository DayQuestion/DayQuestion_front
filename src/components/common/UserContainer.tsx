import React, { useState } from "react";
import style from "./UserContainer.module.css";
import { MdFiberManualRecord } from "react-icons/md";
import { friendsInfo } from "../../assets/data/data";

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

const UserContainer: React.FC<UserContainerProps> = ({ onSelectUser }) => {
  return (
    <div className={style.userContainer}>
      {/* FlatList - 팔로우한 유저 리스트 */}
      {/* 이미지 */}
      {/* 유저 이름 */}
      {/* 유저 최근 업데이트 일자 */}
      {/* 최근 업데이트 일자가 오늘일 경우 초록색 표시( 혹은 확인 하지 않은 피드일 경우 초록색 표시) */}
      {friendsInfo.map((user) => (
        <div
          className={style.innerContainer}
          key={user.id}
          onClick={() => onSelectUser(user)}
        >
          {user.todayUpdate && (
            <MdFiberManualRecord className={style.recordIcon} />
          )}
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

export default UserContainer;
