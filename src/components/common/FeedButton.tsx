import React from "react";
import { useNavigate } from "react-router-dom";
import { GoPeople } from "react-icons/go";
import "../../App.css";

const FeedButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/FeedPage");
        }}
      >
        <GoPeople />
        Feed
      </button>
    </div>
  );
};

export default FeedButton;
