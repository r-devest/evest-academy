import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ArrowText.module.css";
export default function ArrowText(props) {
  return (
    <>
      <Link href={props.link}>
        <div className={styles.arrowtext_container}>
          <Image src="/images/arrow_vctr.svg" width={12.52} height={9.39} />
          <p>{props.text}</p>
        </div>
      </Link>
    </>
  );
}
