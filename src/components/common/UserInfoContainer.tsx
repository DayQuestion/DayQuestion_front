import React from "react";

const userData = {
  answerCount: 102,
  followers: 123,
  followings: 111,
};
const UserInfoContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "10px",
      }}
    >
      <text>답변수 : {userData.answerCount}</text>
      <text>팔로워 : {userData.followers}</text>
      <text>팔로잉 : {userData.followings}</text>
    </div>
  );
};

export default UserInfoContainer;
