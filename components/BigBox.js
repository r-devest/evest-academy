import React from "react";
import styles from "../styles/BigBox.module.css";
import Image from "next/image";
import Link from "next/link";
export default function BigBox(props) {
  return (
    <>
      <Link href={props.link}>
        <div className={styles.box_container}>
          <Image src={props.img_src} width={556} height={271} />
          <h3>{props.title}</h3>
          <div className={styles.para_container}>
            <div className={styles.lessons_container}>
              <Image src="/images/lesson.svg" width={20} height={20} />
              <p>{props.lessons_number}</p>
            </div>
            <div className={styles.duration_container}>
              <Image src="/images/hour.svg" width={20} height={20} />
              <p>{props.time}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
