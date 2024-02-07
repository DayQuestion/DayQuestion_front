import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoPeople } from "react-icons/go";
import "../../App.css";

const FeedButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const select = location.pathname === "/FeedPage" ? "select" : "";

  return (
    <div>
      <button
        className={select}
        onClick={() => {
          navigate("/FeedPage");
        }}
      >
        <GoPeople style={{ fontSize: "22px", marginBottom: "6px" }} />
        Feed
      </button>
    </div>
  );
};

export default FeedButton;
