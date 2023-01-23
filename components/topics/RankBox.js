import React, { useState } from "react";
import styles from "../../styles/topics/RankBox.module.css";
import Link from "next/link";
import Image from "next/image";
import LevelPill from "./LevelPill";
import { useRouter } from "next/router";
export default function RankBox(props) {
  return (
    <>
      <Link href={props.link}>
        <div className={styles.box_container}>
          <div>
            <Image src={props.img_src} width={215.33} height={161.07} />
          </div>
          {/* <div className={styles.content_container}></div> */}
          <div className={styles.content_container}>
            <LevelPill
              text={props.level_text}
              textColor={props.level_color}
              border={props.level_border}
            />
            <h3>{props.title}</h3>
            <div className={styles.para_container}>
              <div className={styles.lessons_container}>
                <Image
                  src="/images/lesson.svg"
                  width={20}
                  height={20}
                  id={styles.lesson_img_desktop}
                />
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
