import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/TextBox.module.css";
export default function TextBox(props) {
  return (
    <>
      <Link href={props.link}>
        <div className={styles.textbox_container}>
          <Image src={props.img_src} width={126} height={177.93} />
          <div className={styles.text_content}>
            <h3>{props.title}</h3>
            <p>{props.pages}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
