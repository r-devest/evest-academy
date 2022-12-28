import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Footer from "../components/Footer";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "../components/homePage/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import HowTo from "../components/homePage/HowTo";
// import { WithTranslation } from "../next-i18next.config.js";
import Icon_Text from "../components/Icon_Text";
export default function Home() {
  const { locale, locales, push } = useRouter();
  const router = useRouter();
  const handleClick = (e) => () => {
    push("/", undefined, { locale: e });
  };
  const [lang, setLang] = useState("en");
  const handlelang = (e) => () => {
    push("/", undefined, { locale: e });
  };
  return (
    <>
      <Head>
        <title>Evest Academy</title>
        <meta name="description" content="" />
        <link rel="icon" href="/evestLogo.png" />
      </Head>
      <Navbar />

      <Footer />
    </>
  );
}
