import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/MedBox.module.css";
export default function MedBox(props) {
  return (
    <>
      <Link href={props.link}>
        <div className={styles.MedBox}>
          <Image src={props.img_src} width={215.33} height={161.07} />
          <div className={styles.text_content}>
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
        </div>
      </Link>
    </>
  );
}
