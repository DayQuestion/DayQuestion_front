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
        <SlPencil />
        Daily
      </button>
    </div>
  );
};

export default DailyButton;
