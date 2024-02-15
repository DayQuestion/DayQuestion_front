import React from "react";
import style from "./UserHeader.module.css";
import UserInfoContainer from "./UserInfoContainer";

const UserHeader = () => {
  return (
    <div className={style.userContainer}>
      <UserInfoContainer />
    </div>
  );
};

export default UserHeader;
