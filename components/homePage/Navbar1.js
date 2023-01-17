import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown, Nav, Col, Row, NavItem } from "react-bootstrap";
import NavSearchBar from "../../components/homePage/NavSearchBar";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import content from "../../data/navMenu.content.json";
import unOrderedLinks from "../../data/urls.json";
import styles from "../../styles/navMenu.module.css";
// import { Head } from "next/document";
import Script from "next/script";
import $ from "jquery";

export default function Navmenu() {
  const [boldNavLink, setBoldNavLink] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("");
  const router = useRouter();
  const isHomePage = router.pathname;

  const [displaySearchBar, setDisplaySearchBar] = useState(false);

  const languageIndex = detectLangIndex(router.locale);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavClick = (e) => {
    setBoldNavLink(e.target.innerHTML);
  };
  useEffect(() => {
    setCurrentLanguage(detectLang(router.locale));
    if (localStorage.getItem("loggedin") === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  const detectLang = (lang) => {
    if (lang === "en") return "En";
    else if (lang === "es") return "Es";
    else return "ع";
  };

  function detectLangIndex(lang) {
    if (lang === "en") return 0;
    else if (lang === "es") return 2;
    else return 1;
  }

  const handleDisplaySearchBar = () => {
    setDisplaySearchBar(true);
  };

  const closeSearchBar = () => {
    setDisplaySearchBar(false);
  };

  const handlePagesMapping = (e) => {
    const lang = router.locale; // en / ar

    const currentLangIndex = detectLangIndex(router.locale);

    const targetLangIndex =
      e.target.innerHTML === "English"
        ? 0
        : e.target.innerHTML === "عربي"
        ? 1
        : 2;

    if (currentLangIndex === targetLangIndex) return;

    let currentPathName;

    if (lang === "ar") currentPathName = decodeURI(document.location.pathname);
    else currentPathName = document.location.pathname;

    for (
      let i = 0;
      i < unOrderedLinks.data[currentLangIndex].links.length;
      i++
    ) {
      if (
        unOrderedLinks.data[currentLangIndex].links[i].link.includes(
          currentPathName
        )
      ) {
        document.location.replace(
          `${window.location.protocol + "//"}${
            document.location.host +
            unOrderedLinks.data[targetLangIndex].links[i].link
          }`
        );
        return;
      }
    }

    // /company/contact-us#/

    let headerIndex, linkIndex;

    for (
      let i = 0;
      i < content.data[currentLangIndex].navHeaders.length - 3;
      i++
    ) {
      for (
        let j = 0;
        j < content.data[currentLangIndex].navHeaders[i].header.links.length;
        j++
      ) {
        if (
          content.data[currentLangIndex].navHeaders[i].header.links[
            j
          ].linkURL.includes(currentPathName)
        ) {
          headerIndex = i;
          linkIndex = j;
        }
      }
    }

    if (headerIndex !== undefined && linkIndex !== undefined)
      document.location.replace(
        `${window.location.protocol + "//"}${
          document.location.host +
          content.data[targetLangIndex].navHeaders[headerIndex].header.links[
            linkIndex
          ].linkURL
        }`
      );
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {displaySearchBar == true ? (
        <NavSearchBar close={closeSearchBar} />
      ) : null}

      <div id="pts-forx-init-wraper">
        {/* <panda-forex-init></panda-forex-init> */}
        <panda-forex-personal-profile></panda-forex-personal-profile>
        <panda-forex-client-area></panda-forex-client-area>
        <panda-forex-deposit-credit show-button="false"></panda-forex-deposit-credit>
      </div>

      <div className={styles.navColorBackground}>
        <Navbar
          expand="lg"
          id="navbarContainer"
          style={{ padding: "0 15px" }}
          className={styles.whiteNav}
        >
          {/* <Container> */}

          {isHomePage === "/" ? null : (
            <style>
              {`
              #navbarContainer .navbar-toggler span{
                filter: brightness(0%) !important;
              }
              `}
            </style>
          )}

          <Navbar.Brand
            style={{}}
            href={
              router.locale === "en"
                ? "/"
                : router.locale === "ar"
                ? "/ar?lang=ar"
                : "/es"
            }
          >
            <div
              style={{
                display: "flex",
                alignContent: "center",
                width: "130px",
              }}
            >
              {isHomePage === "/" && router.locale === "en" ? (
                <Image
                  src={"/Images/navbar/logoAcademy.svg"}
                  width={"130"}
                  height={47.67}
                />
              ) : isHomePage === "/" && router.locale === "ar" ? (
                // logo in arabic
                <Image
                  src={"/Images/navbar/logoAcademy.svg"}
                  width={"130"}
                  height={47.67}
                />
              ) : (
                // logo in english
                <Image
                  src={"/Images/navbar/logoAcademy.svg"}
                  width={"130"}
                  height={47.67}
                />
              )}
            </div>
          </Navbar.Brand>

          <div
            className={styles.logoRightLine}
            style={{
              borderRight: "1px solid black",
              width: "2px",
              height: "60px",
              opacity: 0.1,
            }}
          ></div>

          <div
            onClick={handleDisplaySearchBar}
            className={
              styles.searchBarContainer + ` ` + styles.searchBarContainerMobile
            }
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaSearch />
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ dipslay: "flex", justifyContent: "space-between" }}
          >
            <Nav>
              <div
                className={
                  styles.navLinksContainer +
                  " hover-underline-animation " +
                  ` ${
                    boldNavLink == "trading-services"
                      ? "navBarLInkStyleConditional"
                      : ""
                  }`
                }
                onClick={handleNavClick}
              >
                <Nav.Link id="collasible-nav-dropdown" href="/How-To">
                  {content.data[languageIndex].navHeaders[0].header.name}
                </Nav.Link>

                <MdKeyboardArrowRight className={styles.rightArrow} />
              </div>
              <div
                className={
                  styles.navLinksContainer +
                  " hover-underline-animation " +
                  ` ${
                    boldNavLink == "trading-services"
                      ? "navBarLInkStyleConditional"
                      : ""
                  }`
                }
                onClick={handleNavClick}
              >
                <Nav.Link id="collasible-nav-dropdown" href="/Topics">
                  {content.data[languageIndex].navHeaders[1].header.name}
                </Nav.Link>

                <MdKeyboardArrowRight className={styles.rightArrow} />
              </div>

              <div
                className={
                  styles.navLinksContainer +
                  " hover-underline-animation " +
                  ` ${
                    boldNavLink == "Trading Platforms"
                      ? "navBarLInkStyleConditional"
                      : ""
                  }`
                }
                onClick={handleNavClick}
              >
                <Nav.Link id="collasible-nav-dropdown" href="/Webinars">
                  {content.data[languageIndex].navHeaders[2].header.name}
                </Nav.Link>

                <MdKeyboardArrowRight className={styles.rightArrow} />
              </div>

              <div
                className={
                  styles.navLinksContainer +
                  " hover-underline-animation " +
                  ` ${
                    boldNavLink == "Markets" ? "navBarLInkStyleConditional" : ""
                  }`
                }
                onClick={handleNavClick}
              >
                <Nav.Link id="collasible-nav-dropdown" href="/Glossary">
                  {content.data[languageIndex].navHeaders[3].header.name}
                </Nav.Link>

                <MdKeyboardArrowRight className={styles.rightArrow} />
              </div>

              <div
                className={
                  styles.navLinksContainer +
                  " hover-underline-animation " +
                  ` ${
                    boldNavLink == "Educative"
                      ? "navBarLInkStyleConditional"
                      : ""
                  }`
                }
                onClick={handleNavClick}
              >
                {/* <NavDropdown
                  title={content.data[languageIndex].navHeaders[4].header.name}
                  id="collasible-nav-dropdown"
                >
                  {content.data[languageIndex].navHeaders[4].header.links.map(
                    (i) => {
                      return (
                        <div
                          className={styles.parentNavSubCategoryContainer}
                          key={i.linkName}
                        >
                          <NavDropdown.Item href={`${i.linkURL}`}>
                            {i.sub ? (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <div>{i.linkName}</div>
                                {router.locale === "ar" ? (
                                  <MdKeyboardArrowLeft />
                                ) : (
                                  <MdKeyboardArrowRight />
                                )}
                                <div className={styles.navSubCategoryContainer}>
                                  {i.sub.map((sub) => {
                                    return (
                                      <a key={sub} href={`${sub.linkURL}`}>
                                        <p>{sub.linkName}</p>
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            ) : (
                              i.linkName
                            )}
                          </NavDropdown.Item>
                        </div>
                      );
                    }
                  )}
                </NavDropdown> */}

                <MdKeyboardArrowRight className={styles.rightArrow} />
              </div>

              {/* <div
                className={
                  styles.navLinksContainer +
                  " " +
                  styles.companyClass +
                  " hover-underline-animation " +
                  ` ${
                    boldNavLink == "Company" ? "navBarLInkStyleConditional" : ""
                  }`
                }
                onClick={handleNavClick}
              >
                <NavDropdown
                  title={content.data[languageIndex].navHeaders[5].header.name}
                  id="collasible-nav-dropdown"
                >
                  {content.data[languageIndex].navHeaders[5].header.links.map(
                    (i) => {
                      return (
                        <NavDropdown.Item
                          href={`${i.linkURL}`}
                          key={i.linkName}
                        >
                          {i.linkName}
                        </NavDropdown.Item>
                      );
                    }
                  )}
                </NavDropdown>

                <MdKeyboardArrowRight className={styles.rightArrow} />
              </div> */}

              <div
                onClick={handleDisplaySearchBar}
                className={styles.searchBarContainer}
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaSearch color="black" />
              </div>
            </Nav>

            {/* This is the right side of the navbar */}
            <Nav
              style={{ color: `${isHomePage === "/" ? styles.whiteNav : ""}` }}
            >
              <div
                className={`hover-underline-animation ${styles.langContainer}`}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div
                  className={styles.langImageContainer}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Image
                    src={"/images/navbar/lang.png"}
                    width={18}
                    height={18}
                  />
                </div>
                <NavDropdown
                  title={`${currentLanguage}`}
                  id="collasible-nav-dropdown"
                  style={{ width: "80%" }}
                >
                  <NavDropdown.Item onClick={handlePagesMapping}>
                    عربي
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/ar?lang=ar">عربي</NavDropdown.Item> */}
                  <NavDropdown.Item onClick={handlePagesMapping}>
                    English
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/es">Spanish</NavDropdown.Item> */}
                </NavDropdown>
              </div>

              <Nav.Link
                href={
                  router.locale === "ar"
                    ? "/ar/الشركة/مركز-المساعدة?lang=ar"
                    : "/company/help-desk"
                }
                className={`hover-underline-animation`}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Image
                      src={"/images/navbar/help.png"}
                      width={18}
                      height={18}
                    />
                    <span>
                      {content.data[languageIndex].navHeaders[6].header.name}
                    </span>
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className={styles.underLineContainer}></div>
    </div>
  );
}
