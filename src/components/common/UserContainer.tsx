import React from "react";
import img1 from "../../assets/images/logo.png";
import style from "./UserContainer.module.css";

const Users = [
  {
    id: 1,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
  {
    id: 2,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
  {
    id: 3,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
  {
    id: 4,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
  {
    id: 5,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
  {
    id: 6,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
  {
    id: 7,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
  {
    id: 8,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
  {
    id: 9,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
  {
    id: 10,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
  {
    id: 11,
    image: img1,
    nickName: "Lily Ash",
    note: "Long Time No See",
  },
];
const UserContainer = () => {
  return (
    <div className={style.userContainer}>
      {Users.map((user) => (
        <div className={style.innerContainer}>
          <text>{user.id}</text>
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
