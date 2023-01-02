import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar1 from "../components/homePage/NavBar1";
export default function Home() {
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
      <Navbar1 />

      <Footer />
    </>
  );
}
