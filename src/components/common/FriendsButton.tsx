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
        <CgHeart />
        Friends
      </button>
    </div>
  );
};

export default FriendsButton;
