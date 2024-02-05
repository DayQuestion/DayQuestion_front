import React from "react";
import DailyButton from "./DailyButton";
import FriendsButton from "./FriendsButton";
import FeedButton from "./FeedButton";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <DailyButton />
      <FriendsButton />
      <FeedButton />
    </div>
  );
};

export default Nav;
