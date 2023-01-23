import React, { useState } from "react";
import Pills from "../../components/topics/Pills";
import Bracket from "../../components/Bracket";
import { Container } from "react-bootstrap";
import styles from "../../styles/topics/TopicsIndex.module.css";
import { useRouter } from "next/router";
import Tabs1 from "../../components/topics/Tabs";
import Arrow from "../../components/Arrow";
import TextBox from "../../components/TextBox";

export default function index() {
  const router = useRouter();

  const pills = [
    {
      link: "/",
      border: "1px solid green",
      text: "Meta Trader ",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Bitcoin",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Cryptocurrency",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Blockchain",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Trading",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Social",
    },
  ];
  const pills2 = [
    {
      link: "/",
      border: "1px solid green",
      text: "Security",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Meta",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Analysis",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Blockchain",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Web Trading",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Mobile",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "MT5",
    },
  ];
  const pills3 = [
    {
      link: "/",
      border: "1px solid green",
      text: "Meta Trader ",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Bitcoin",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Cryptocurrency",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Blockchain",
    },
    {
      link: "/",
      border: "1px solid green",
      text: "Trading",
    },
  ];
  return (
    <>
      <div className={styles.topics_s1}>
        <Container>
          <Bracket color="#EAD39B" text="Topics" font_color="#11807E" />
          <br />
          <div className={styles.pill_container}>
            {pills.map(({ link, font_color, border, text }) => (
              <Pills
                key={link}
                link={link}
                font_color={font_color}
                border={border}
                pill_text={text}
              />
            ))}
          </div>
          <div className={styles.pill_container}>
            {pills2.map(({ link, font_color, border, text }) => (
              <Pills
                key={link}
                link={link}
                font_color={font_color}
                border={border}
                pill_text={text}
              />
            ))}
          </div>
          <div className={styles.pill_container}>
            {pills3.map(({ link, font_color, border, text }) => (
              <Pills
                key={link}
                link={link}
                font_color={font_color}
                border={border}
                pill_text={text}
              />
            ))}
          </div>
        </Container>
      </div>
      <div className={styles.topics_s2}>
        <Container>
          <Tabs1 />
        </Container>
      </div>

      {/* Third Section */}
      <div className={styles.home_third_section}>
        <Container>
          <div className={styles.bracket_arrow}>
            <Bracket
              color="#EAD39B"
              font_color="#11807E"
              text="Related e-Books"
            />
            <Arrow text="View" link="/" />
          </div>
          <div className={styles.s3_body}>
            <TextBox
              title="Trading Strategies"
              link="/"
              img_src="/images/textbox.png"
              pages="120 pages"
            />
            <TextBox
              title="Trading Strategies"
              link="/"
              img_src="/images/textbox.png"
              pages="120 pages"
            />
            <TextBox
              title="Trading Strategies"
              link="/"
              img_src="/images/textbox.png"
              pages="120 pages"
            />
          </div>
          <div className={styles.s3_body}>
            <TextBox
              title="Trading Strategies"
              link="/"
              img_src="/images/textbox.png"
              pages="120 pages"
            />
            <TextBox
              title="Trading Strategies"
              link="/"
              img_src="/images/textbox.png"
              pages="120 pages"
            />
            <TextBox
              title="Trading Strategies"
              link="/"
              img_src="/images/textbox.png"
              pages="120 pages"
            />
          </div>
        </Container>
      </div>
    </>
  );
}
