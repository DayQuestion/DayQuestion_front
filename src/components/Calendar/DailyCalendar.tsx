import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DailyCalendar.css";
import moment from "moment";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const DailyCalendar = () => {
  const [today, setToday] = useState(new Date());

  const onChangeToday = () => {
    setToday(today);
  };

  return (
    <div className="calendarBox">
      <span className="daySelect">날짜를 선택해주세요.</span>
      <Calendar
        onChange={onChangeToday}
        formatDay={(locale, date) => moment(date).format("D")}
        value={today}
        calendarType="US"
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        formatShortWeekday={(locale, date) =>
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]
        }
      />
    </div>
  );
};

export default DailyCalendar;
