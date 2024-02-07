import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SlPencil } from "react-icons/sl";

const DailyButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const select = location.pathname === "/dailyPage" ? "select" : "";

  return (
    <div>
      <button
        className={select}
        onClick={() => {
          navigate("/dailyPage");
        }}
      >
        <SlPencil style={{ fontSize: "22px", marginBottom: "6px" }} />
        Daily
      </button>
    </div>
  );
};

export default DailyButton;
