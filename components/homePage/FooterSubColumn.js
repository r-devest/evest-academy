import React, { useEffect } from "react";
import styles from "../../styles/footer/FooterSubColumn.module.css";
export default function FooterSubColumn(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className={styles.subcolumn_container}>
      {props.data.clickable ? (
        <a href={props.data.href}>
          <p>{props.data.text}</p>
        </a>
      ) : props.data.hasTitle ? (
        <>
          <h6>{props.data.title}</h6> <p>{props.data.text}</p>
        </>
      ) : (
        <p>{props.data.text}</p>
      )}
    </div>
  );
}
