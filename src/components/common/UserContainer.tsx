import React, { useState } from "react";
import img1 from "../../assets/images/logo.png";
import style from "./UserContainer.module.css";
import { MdFiberManualRecord } from "react-icons/md";

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

  const showModal = () => {
    setModal(true);
  };
  return (
    <div className={style.userContainer}>
      {Users.map((user) => (
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
        </div>
      ))}
    </div>
  );
};

export default UserContainer;
