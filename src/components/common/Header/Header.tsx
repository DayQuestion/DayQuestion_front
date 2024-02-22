import React, { useState } from "react";
import style from "./Header.module.css";
import userProfile from "../../../assets/profile.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <>
      <div className={style.header}>
        <div className={style.userProfileContainer}>
          <img
            src={userProfile}
            alt="UserProfile"
            className={style.userProfile}
          />
          <span className={style.userId}>userId</span>
        </div>
        <button className={style.setting} onClick={toggleDropdown}>
          ...
        </button>
        {isDropdown && (
          <div className={style.dropdownMenu}>
            <button
              className={style.dropdownItem}
              onClick={() => {
                navigate("/myPage");
              }}
            >
              설정
            </button>
            <button className={style.dropdownItem}>로그아웃</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
