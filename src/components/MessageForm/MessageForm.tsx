import React, { useState } from "react";
import { PiTelegramLogoThin } from "react-icons/pi";
import styles from "./MessageForm.module.css";

const MessageForm = () => {
  const [content, setContent] = useState("");

  return (
    <div>
      <form className={styles.textareaWrapper}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">
          <PiTelegramLogoThin style={{ fontSize: "40px", color: "#0094ff" }} />
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
