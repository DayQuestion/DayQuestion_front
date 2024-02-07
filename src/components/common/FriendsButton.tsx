import React from "react";
import { CgHeart } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";

const FriendsButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const select = location.pathname === "/FriendsPage" ? "select" : "";
  return (
    <div>
      <button
        className={select}
        onClick={() => {
          navigate("/FriendsPage");
        }}
      >
        <CgHeart style={{ fontSize: "22px", marginBottom: "6px" }} />
        Friends
      </button>
    </div>
  );
};

export default FriendsButton;
