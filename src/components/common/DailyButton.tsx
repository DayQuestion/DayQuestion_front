import React from "react";
import { useNavigate } from "react-router-dom";
import { SlPencil } from "react-icons/sl";

const DailyButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/Daily");
        }}
      >
        <SlPencil style={{ fontSize: "22px", marginBottom: "6px" }} />
        Daily
      </button>
    </div>
  );
};

export default DailyButton;
