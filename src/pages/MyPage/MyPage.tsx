import React from "react";
// import userProfile from "../../assets/profile.png";
import styles from "./MyPage.module.css";
import Nav from "../../components/common/Nav";
import Search from "../../components/common/Search";

const MyPage = () => {
  return (
    <div className={styles.profilePage}>
      <Search />
      <Nav />
      <h2>User Page</h2>
      <div className={styles.follow}>
        <span>Answered questions : 0 / 2 (0%)</span>
        <span> Follower : </span>
        <span> Following : </span>
      </div>
      <div className={styles.userContent}>
        <div className={styles.userImg}>
          <img src="" alt="UserProfile" />
          <button>이미지 변경</button>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.idBox}>
            <div>
              <span>이메일 : </span>
              <input type="text" placeholder="xxxxxxx@xxxxxx.xxx" disabled />
            </div>
            <div>
              <span>한줄 소개 : </span>
              <input type="text" />
            </div>
            <div>
              <span>NickName : </span>
              <input type="text" placeholder="김팅팅" />
            </div>
            <div>
              <span>비밀번호 변경 : </span>
              <input type="password" placeholder="비밀번호 변경" />
            </div>
            <div>
              <span>비밀번호 확인 : </span>
              <input type="password" placeholder="비밀번호 확인" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
