import React from "react";
import styles from "./Search.module.css";
import { SlMagnifier } from "react-icons/sl";
import { SlOptions } from "react-icons/sl";

const Search = () => {
  return (
    <div className={styles.leftHeader}>
      <input
        className={styles.leftInput}
        // placeholder="Users, Followings, Chats, ..."
      />
      <SlMagnifier className={styles.leftInputIcon} />
      {/* <SlOptions className={styles.leftOptionsIcon} /> */}
    </div>
  );
};

export default Search;
