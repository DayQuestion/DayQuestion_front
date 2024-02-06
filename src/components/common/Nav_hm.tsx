import React from "react";
import styles from "./Nav_hm.module.css";
import btn_daily_un from "../../assets/images/btn_daily_un.png";
import btn_friends_un from "../../assets/images/btn_friends_un.png";
import btn_feed from "../../assets/images/btn_feed.png";
import { useNavigate } from "react-router-dom";

export function Nav_hm() {
  const navigate = useNavigate();
  const handleClick = (navigation: string) => {
    navigate(navigation);
  };
  return (
    <div className={styles.container}>
      <div className={styles.dailyContainer}>
        <img
          onClick={() => handleClick("/dailyPage")}
          src={btn_daily_un}
          alt="daily"
        />
      </div>
      <div>
        <img
          onClick={() => handleClick("/friendsPage")}
          src={btn_friends_un}
          alt="friends"
        />
      </div>
      <div>
        <img
          onClick={() => handleClick("/feedPage")}
          src={btn_feed}
          alt="feed"
        />
      </div>
    </div>
  );
}
