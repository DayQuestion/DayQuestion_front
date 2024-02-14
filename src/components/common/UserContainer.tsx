import React, { useState } from "react";
import img1 from "../../assets/images/logo.png";
import style from "./UserContainer.module.css";
import { MdFiberManualRecord } from "react-icons/md";
import ModalContainer from "./ModalContainer";
import { friendsData } from "../../assets/data/data";
const Users = [
  {
    id: 1,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
];

const UserContainer = () => {
  const [modal, setModal] = useState(false);

  const showModal = (user: object) => {
    setModal(true);
  };

  return (
    <div className={style.userContainer}>
      {/* FlatList - 팔로우한 유저 리스트 */}
      {/* 이미지 */}
      {/* 유저 이름 */}
      {/* 유저 최근 업데이트 일자 */}
      {/* 최근 업데이트 일자가 오늘일 경우 초록색 표시( 혹은 확인 하지 않은 피드일 경우 초록색 표시) */}
      {friendsData.map((user) => (
        <div className={style.innerContainer}>
          <MdFiberManualRecord className={style.recordIcon} />
          <img
            className={style.userImage}
            src={user.image}
            alt={user.nickName}
            onClick={showModal}
          />
          <div className={style.userInfo}>
            <text className={style.nickName}>{user.nickName}</text>
            <text className={style.note}>{user.note}</text>
          </div>
          {modal && <ModalContainer {...user} />}
        </div>
      ))}
    </div>
  );
};

export default UserContainer;
