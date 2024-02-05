import React from "react";
import { CgHeart } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const FriendsButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/FeedPage");
        }}
      >
        <CgHeart style={{ fontSize: "22px", marginBottom: "6px" }} />
        Friends
      </button>
    </div>
  );
};

export default FriendsButton;
