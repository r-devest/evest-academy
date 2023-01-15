import React, { useEffect, useState } from "react";
import content from "../data/footerLinks.json";
import FooterColumn from "../components/homePage/FooterColumn";
import styles from "../styles/footer/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
export default function Footer() {
  const [columnsData, setColumnsData] = useState(content);
  const router = useRouter();
  return (
    <>
      <div className={styles.footer_container}>
        <Container>
          <div className={styles.footer_first_section}>
            <Image src="/images/footer/logo.svg" width={100} height={100} />
            {router.locale == "en" ? (
              <>
                <p id={styles.footer_para}>
                  The information on this site is not itntended for use by any
                  person in any country or vjurisdiction where such distribution
                  or use would be contrary to local law or regulation
                </p>
                <div className={styles.social_media_icons_mobile}>
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
                <p id={styles.footer_para} style={{ fontWeight: "bold" }}>
                  المعلومات الواردة في هذا الموقع ليست معلنة للاستخدام من قبل أي
                  شخص شخص في أي بلد أو سلطة قضائية حيث مثل هذا التوزيع أو سيكون
                  الاستخدام مخالفًا للقانون أو اللوائح المحلية
                </p>
                <div className={styles.social_media_icons_mobile}>
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
            )}
          </div>

          {router.locale == "en" ? (
            <>
              <p id={styles.footer_para_mobile}>
                The information on this site is not itntended for use by any
                person in any country or vjurisdiction where such distribution
                or use would be contrary to local law or regulation
              </p>
              <div className={styles.footer_second_section} locale="en">
                {columnsData.data[0].content.map((column) => {
                  return <FooterColumn data={column} key={column.header} />;
                })}
              </div>
            </>
          ) : (
            <>
              <p id={styles.footer_para_mobile} style={{ fontWeight: "bold" }}>
                المعلومات الواردة في هذا الموقع ليست معلنة للاستخدام من قبل أي
                شخص شخص في أي بلد أو سلطة قضائية حيث مثل هذا التوزيع أو سيكون
                الاستخدام مخالفًا للقانون أو اللوائح المحلية
              </p>
              <div className={styles.footer_second_section} locale="ar">
                {columnsData.data[1].content.map((column) => {
                  return <FooterColumn data={column} key={column.header} />;
                })}
              </div>
            </>
          )}
        </Container>
      </div>
    </>
  );
}
