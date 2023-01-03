import React, { useEffect, useState } from "react";
import content from "../data/footerLinks.json";
import FooterColumn from "../components/homePage/FooterColumn";
import styles from "../styles/footer/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
  const [columnsData, setColumnsData] = useState(content);
  const router = useRouter();
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_first_section}>
          <Image src="/images/footer/logo.svg" width={100} height={100} />
          {router.locale == "en" ? (
            <>
              <p>
                The information on this site is not itntended for use by any
                person in any country or vjurisdiction where such distribution
                or use would be contrary to local law or regulation
              </p>
              <div className={styles.footer_social_container}>
                <p style={{ fontWeight: "bold" }}>Follow us</p>
                <div className={styles.social_media_icons}>
                  <Link href="/">
                    <Image
                      src="/images/footer/facebook.svg"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/images/footer/twitter.svg"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/images/footer/instagram.svg"
                      width={30}
                      height={30}
                    />
                  </Link>

                  <Link href="/">
                    <Image
                      src="/images/footer/youtube.svg"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <p style={{ fontWeight: "bold" }}>
                المعلومات الواردة في هذا الموقع ليست معلنة للاستخدام من قبل أي
                شخص شخص في أي بلد أو سلطة قضائية حيث مثل هذا التوزيع أو سيكون
                الاستخدام مخالفًا للقانون أو اللوائح المحلية
              </p>
              <div className={styles.footer_social_container}>
                <p>تابعنا</p>
                <div className={styles.social_media_icons}>
                  <Link href="/">
                    <Image
                      src="/images/footer/facebook.svg"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/images/footer/twitter.svg"
                      width={100}
                      height={100}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/images/footer/instagram.svg"
                      width={100}
                      height={100}
                    />
                  </Link>

                  <Link href="/">
                    <Image
                      src="/images/footer/youtube.svg"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.footer_second_section}>
          {columnsData.data[0].content.map((column) => {
            return <FooterColumn data={column} key={column.header} />;
          })}
        </div>
      </div>
    </>
  );
}
