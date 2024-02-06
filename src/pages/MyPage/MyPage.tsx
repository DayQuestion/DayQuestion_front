import React from "react";
import userProfile from "../../assets/profile.png";
import styles from "./MyPage.module.css";
import { MdFiberManualRecord } from "react-icons/md";

const MyPage = () => {
  return (
    <div className={styles.myPage}>
      <div className={styles.box}>
        <MdFiberManualRecord className={styles.recordIcon} />
        <h2>User Page</h2>
      </div>
      <div className={styles.follow}>
        <span>Answered questions : 0 / 2 (0%)</span>
        <span> Follower : </span>
        <span> Following : </span>
      </div>
      <div className={styles.userContent}>
        <div className={styles.userImg}>
          <img src={userProfile} alt="UserProfile" />
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
            <div className={styles.setting}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                다크모드
                <input
                  type="checkbox"
                  style={{ width: "20px", marginLeft: "10px" }}
                />
              </div>
              <div>
                <input type="submit" value="저장" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
