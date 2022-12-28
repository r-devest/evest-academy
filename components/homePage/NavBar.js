import React, { useState, useEffect } from "react";
import Link from "next/link";
import Icon_Text from "../Icon_Text";
import styles from "../../styles/NavBar.module.css";
import { useRouter } from "next/router";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Head from "next/head";

export default function NavBar() {
  const [isShown, setIsShown] = useState("rotateX(0deg)");
  const [show, setShow] = useState("none");

  const router = useRouter();

  function showSrchBar() {
    if (show == "none") {
      setShow("block");
    } else {
      setShow("none");
    }
  }

  function flip() {
    if (isShown == "rotateX(0deg)") {
      setIsShown("rotateX(180deg)");
    } else {
      setIsShown("rotateX(0deg)");
    }
  }
  return (
    <>
      {router.locale == "en" ? (
        <>
          <div
            className={styles.navbar_container}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="/">
                  <img src="/images/homePage/logo.svg" width="100%"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="/HowTo">How to</Nav.Link>
                    <Nav.Link href="/">Topics</Nav.Link>
                    <Nav.Link href="/">Webinars</Nav.Link>
                    <Nav.Link href="/">Glossary</Nav.Link>
                  </Nav>
                  <Button id={styles.srch_btn} onClick={showSrchBar}>
                    <img src="/images/homePage/srch.svg" width="100%" />
                  </Button>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      style={{ display: show }}
                    />
                  </Form>

                  <NavDropdown
                    title={
                      <Icon_Text
                        icon_src="/images/homePage/navbar/earth.svg"
                        icon_text="En"
                      />
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="/Ar">AR</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/En">EN</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">ES</NavDropdown.Item>
                  </NavDropdown>
                  <Icon_Text
                    icon_src="/images/homePage/navbar/question_mark.svg"
                    icon_text="En"
                  />
                  <Icon_Text
                    icon_src="/images/homePage/navbar/user.svg"
                    icon_text="En"
                  />
                </Navbar.Collapse>
              </Container>
            </Navbar>
            {/* 
            <div className={styles.icons_navbar_container}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                  onClick={flip}
                >
                  <Icon_Text
                    icon_src="/images/homePage/navbar/earth.svg"
                    icon_text="En"
                  />
                  <img
                    style={{ marginTop: "0.25rem", transform: isShown }}
                    src="/images/homePage/navbar/arrow.svg"
                    width="9.51px"
                    alt="arrow icon"
                  />
                </button> */}
            {/* </div>
</div> */}
          </div>
        </>
      ) : (
        <>
          <div
            className={styles.navbar_container}
            style={{
              display: "flex",
              justifyContent: "space-between",
              direction: "rtl",
            }}
          >
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="/">
                  <img src="/images/homePage/logo.svg" width="100%"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="/HowTo">كيف</Nav.Link>
                    <Nav.Link href="/">مواضيع</Nav.Link>
                    {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link href="/">Webinars</Nav.Link>
                    <Nav.Link href="/">قاموس</Nav.Link>
                  </Nav>
                  <Button id={styles.srch_btn} onClick={showSrchBar}>
                    <img src="/images/homePage/srch.svg" width="100%" />
                  </Button>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      style={{ display: show }}
                    />
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <div className={styles.icons_navbar_container}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Icon_Text
                  icon_src="/images/homePage/navbar/earth.svg"
                  icon_text="En"
                />
                <img
                  style={{ marginTop: "0.25rem" }}
                  src="/images/homePage/navbar/arrow.svg"
                  width="9.51px"
                  alt="arrow icon"
                />
              </div>
              <Icon_Text
                icon_src="/images/homePage/navbar/question_mark.svg"
                icon_text="En"
              />
              <Icon_Text
                icon_src="/images/homePage/navbar/user.svg"
                icon_text="En"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
