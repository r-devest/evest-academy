import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Bracket from "../components/Bracket";
import Arrow from "../components/Arrow";
import BigBox from "../components/BigBox";
import MedBox from "../components/MedBox";
import TextBox from "../components/TextBox";
import UnderlinedHeading from "../components/UnderlinedHeading";
import ArrowText from "../components/ArrowText";
export default function Home() {
  const router = useRouter();

  return (
    <>
      {/* First Section */}
      <div className={styles.first_section_home}>
        <Container className={styles.s1_container}>
          <div className={styles.first_col}>
            <h1>Learn to trade with us at the 100% free evest academy</h1>
            <div className={styles.rectangle}></div>
            <br />
            <p>Maximizing wealth begins with maximizing knowledge</p>
            <Button
              style={{
                backgroundColor: "#16A2A0",
                border: "none",
                fontWeight: "700",
                fontSize: "18px",
                borderRadius: "10px",
                padding: "16px 39px",
              }}
            >
              Start Learning
            </Button>
          </div>
          <div className={styles.second_col}>
            <Image
              src="/images/homepage/laptop_image.png"
              width={480}
              height={334}
            />
          </div>
        </Container>
      </div>

      {/* Second Section */}
      <div className={styles.home_second_section}>
        <Image src="/images/homepage/Line 15.svg" width={90} height={100} />

        <div className={styles.s2_para}>
          <p>
            Whether you are a beginner working to learn the basics of trading or
            you are an experienced trader or even a professional in trading,{" "}
            <span style={{ fontWeight: "bold" }}>
              the free Evest Academy has all the educational materials to suit
              everyone with all levels of experience.
            </span>
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className={styles.home_third_section}>
        <Container>
          <div className={styles.bracket_arrow}>
            <Bracket
              color="#EAD39B"
              font_color="#11807E"
              text="Beginner courses"
            />
            <Arrow text="View all" link="/" />
          </div>
          <div className={styles.s3_body}>
            <BigBox
              title="Trading Strategies"
              img_src="/images/Rectangle 71.png"
              lessons_number="5 Lessons"
              time="5 mins"
              link="/"
            />
            <div className={styles.medbox_container}>
              <MedBox
                title="Trading Strategies"
                link="/"
                img_src="/images/med_box.png"
                lessons_number="5 Lessons"
                time="5 mins"
              />
              <MedBox
                title="Trading Strategies"
                link="/"
                img_src="/images/med_box.png"
                lessons_number="5 Lessons"
                time="5 mins"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Fourth Section */}
      <div className={styles.home_fourth_section}>
        <Container>
          <div className={styles.bracket_arrow}>
            <Bracket
              color="#EAD39B"
              font_color="#11807E"
              text="Advanced courses"
            />
            <Arrow text="View all" link="/" />
          </div>
          <div className={styles.s4_body}>
            <BigBox
              title="Trading Strategies"
              img_src="/images/Rectangle 71.png"
              lessons_number="5 Lessons"
              time="5 mins"
              link="/"
            />
            <div className={styles.medbox_container}>
              <MedBox
                title="Trading Strategies"
                link="/"
                img_src="/images/med_box.png"
                lessons_number="5 Lessons"
                time="5 mins"
              />
              <MedBox
                title="Trading Strategies"
                link="/"
                img_src="/images/med_box.png"
                lessons_number="5 Lessons"
                time="5 mins"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Fifth Section */}
      <div className={styles.home_fifth_section}>
        <Container>
          <div className={styles.bracket_arrow}>
            <Bracket
              color="#EAD39B"
              font_color="#11807E"
              text="Introductory e-books"
            />
            <Arrow text="View" link="/" />
          </div>
          <div className={styles.s5_body}>
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
          <div className={styles.s5_body}>
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

      {/* Sixth Section */}
      <div className={styles.home_sixth_section}>
        <Container>
          <div className={styles.bracket_arrow}>
            <Bracket
              color="#EAD39B"
              font_color="#11807E"
              text="Advanced e-books"
            />
            <Arrow text="View all" link="/" />
          </div>
          <div className={styles.s6_body}>
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
          <div className={styles.s6_body}>
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

      {/* Seventh Section */}
      <div className={styles.home_seventh_section}>
        <Container>
          <Bracket color="#EAD39B" font_color="#11807E" text="Analysis" />
          <div className={styles.s7_body}>
            <div>
              <UnderlinedHeading title="Signals" />
              <ArrowText text="Live coverage" link="/" />
              <ArrowText text="Commodity signals" link="/" />
              <ArrowText text="Stock signals" link="/" />
              <ArrowText text="Currency signals" link="/" />
            </div>
            <div>
              <UnderlinedHeading title="Fundamental analysis" />
              <ArrowText text="Economic calendar" link="/" />
              <ArrowText text="Market news" link="/" />
            </div>
            <div>
              <UnderlinedHeading title="Technical Analysis" />
              <ArrowText text="Commodities" link="/" />
              <ArrowText text="Indices" link="/" />
              <ArrowText text="Stocks" link="/" />
              <ArrowText text="Currencies" link="/" />
            </div>
          </div>
          <div className={styles.s7_body}></div>
        </Container>
      </div>
    </>
  );
}
