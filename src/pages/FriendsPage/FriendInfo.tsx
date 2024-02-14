import React, { useState } from "react";
import style from "./FriendInfo.module.css";
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

interface FriendInfoProps {
  friendInfo: User | null;
}

// FC를 사용하지 않는 컴포넌트 정의
const FriendInfo = ({ friendInfo }: FriendInfoProps) => {
  return (
    <div className={style.userContainer}>
      {friendInfo ? (
        <div className={style.innerContainer}>
          <img
            className={style.userImage}
            src={friendInfo.image}
            alt={friendInfo.nickName}
          />
          <div className={style.userInfo}>
            <text className={style.nickName}>{friendInfo.nickName}</text>
            <text className={style.note}>{friendInfo.note}</text>
          </div>
        </div>
      ) : (
        <div>
          <text> 팔로워를 선택해 주세요</text>
        </div>
      )}
    </div>
  );
};

export default FriendInfo;
