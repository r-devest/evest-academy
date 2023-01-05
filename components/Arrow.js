import React from "react";
import styles from "../styles/Arrow.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Arrow(props) {
  return (
    <div className={styles.arrow_container}>
      <p>{props.text}</p>
      <Link href={props.link}>
        <Image src="/images/arrow.svg" width={32} height={32} />
      </Link>
    </div>
  );
}
