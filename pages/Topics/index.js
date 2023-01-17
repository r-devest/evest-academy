import React from "react";
import Pills from "../../components/topics/Pills";
import Bracket from "../../components/Bracket";
import { Container } from "react-bootstrap";
export default function index() {
  const pills = [
    {
      link: "#",
      font_color: "white",
      border: "1px solid green",
      text: "test",
    },
    {
      link: "#",
      font_color: "red",
      border: "1px solid green",
      text: "test",
    },
  ];
  return (
    <div>
      <Container>
        <Bracket color="#EAD39B" text="Topics" font_color="#11807E" />
        <br />
        {pills.map(({ link, font_color, border, text }) => (
          <Pills
            key={link}
            link={link}
            font_color={font_color}
            border={border}
            pill_text={text}
          />
        ))}
      </Container>
    </div>
  );
}
