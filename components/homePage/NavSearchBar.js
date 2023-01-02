import React from "react";
import { useRouter } from "next/router";
import "animate.css";
import styles from "../../styles/navbarSearchBar.module.css";
import { GrClose } from "react-icons/gr";
export default function navSearchBar(props) {
  const handleCloseSearchBar = () => {
    props.close();
  };
  const router = useRouter();
  return (
    <div
      className={
        styles.navSearchBarContainer +
        " " +
        "animate__animated animate__backInDown"
      }
    >
      <div style={{ width: "80%", margin: "0 auto", padding: "20px 0" }}>
        {/* first line of the search bar that contains the search word and the exit button */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {router.locale == "en" ? (
              <h4 style={{ textTransform: "uppercase" }}>search</h4>
            ) : (
              <h4 style={{ fontFamily: "Arabic Evest" }}>البحث</h4>
            )}
          </div>
          <div style={{ cursor: "pointer" }} onClick={handleCloseSearchBar}>
            <GrClose />
          </div>
        </div>

        {/* This is the search bar */}
        <div>
          {router.locale == "en" ? (
            <input
              className={styles.searchBarStyle}
              type={"text"}
              placeholder="For example: EURUSD, open account, Start Trading"
            />
          ) : (
            <input
              dir="rtl"
              className={styles.searchBarStyle}
              type={"text"}
              placeholder="على سبيل المثال: EURUSD ، افتح حسابًا ، وابدأ التداول"
            />
          )}
        </div>
        <div>
          {router.locale == "en" ? (
            <p
              style={{
                width: "100%",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Didn't find what you were looking for? Visit our Help Centre or
              contact our Customer Support
            </p>
          ) : (
            <p
              dir="rtl"
              style={{
                width: "100%",
                marginTop: "0.5rem",
                textDecoration: "none",
                fontWeight: "bold",
                fontFamily: "Arabic Evest2",
              }}
            >
              لم تجد ما كنت تبحث عنه؟ قم بزيارة مركز المساعدة الخاص بنا أو اتصل
              بدعم العملاء
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
