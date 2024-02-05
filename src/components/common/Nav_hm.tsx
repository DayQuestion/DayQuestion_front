import React from "react";
import styles from "./Nav_hm.module.css";
import btn_daily_un from "../../assets/images/btn_daily_un.png";
import btn_friends_un from "../../assets/images/btn_friends_un.png";
import btn_feed from "../../assets/images/btn_feed.png";

export function Nav2() {
  return (
    <div className={styles.container}>
      <div className={styles.dailyContainer}>
        <img src={btn_daily_un} alt="daily" />
      </div>
      <div>
        <img src={btn_friends_un} alt="friends" />
      </div>
      <div>
        <img src={btn_feed} alt="feed" />
      </div>
    </div>
  );
}
