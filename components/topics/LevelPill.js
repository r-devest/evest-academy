import React from "react";
import styles from "../../styles/topics/LevelPill.module.css";
export default function LevelPill(props) {
  return (
    <div>
      <div
        style={{
          border: props.border,
          color: props.textColor,
          borderRadius: "50px",
          width: "fit-content",
        }}
        className={styles.levelPill}
      >
        <p>{props.text}</p>
      </div>
    </div>
  );
}
