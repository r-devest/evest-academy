import React from "react";
import styles from "../styles/UnderlinedHeading.module.css";
export default function UnderlinedHeading(props) {
  return (
    <>
      <div className={styles.headline_container}>
        <h6>{props.title}</h6>
        <hr />
      </div>
    </>
  );
}
