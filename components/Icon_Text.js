import React from "react";
import styles from "../styles/Icon_Text.module.css";

export default function Icon_Text(props) {
  return (
    <div className={styles.container}>
      <img src={props.icon_src} width="100%" alt="icon image"></img>
      <p>{props.icon_text}</p>
    </div>
  );
}
