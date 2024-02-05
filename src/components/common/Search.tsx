import React from "react";
import styles from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className={styles.searchBox}>
      <input type="text" className={styles.search} />
      <IoIosSearch className={styles.icon} />
    </div>
  );
};

export default Search;
