import React from "react";
import style from "./UserHeader.module.css";
import UserContainer from "./UserContainer";
import UserInfoContainer from "./UserInfoContainer";

const UserHeader = () => {
  return (
    <div className={style.userContainer}>
      <UserContainer />
      <UserInfoContainer />
    </div>
  );
};

export default UserHeader;
