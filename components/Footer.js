import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../styles/Footer.module.css";

export default function Footer(props) {
  const router = useRouter();

  return (
    <div style={{ background: "white", position: "relative" }}>
      <div className={styles.Footer}>
        <Container>
          <div id={styles.first_section_container}>
            {/* logo and paragraph (desktop) , logo and social media icons (mobile) */}
            <div id={styles.first_section}>
              {/* evest logo */}
              <div id={styles.first_section_logo_col}>
                <img
                  src="/Images/footer/logo.svg"
                  width="80%"
                  layout="intrinsic"
                  alt="evest logo"
                />
              </div>
              <div id={styles.first_section_para_col}>
                {router.locale == "en" ? (
                  <p>
                    The information on this site is not intended for use by any{" "}
                    <br />
                    person in any country or jurisdiction where such
                    distribution or <br />
                    use would be contrary to local law or regulation{" "}
                  </p>
                ) : (
                  <p>
                    المعلومات الواردة في هذا الموقع ليست مخصصة للاستخدام من
                    <br />
                    قبل أي شخص في أي بلد أو ولاية قضائية حيث يكون هذا التوزيع
                    <br /> أو سيكون الاستخدام مخالفًا للقانون أو اللوائح المحلية
                  </p>
                )}
              </div>
            </div>

            {/* Social media icons and app store & google play icons (desktop) */}
            <div id={styles.second_section}>
              {/* social media icons and paragraph */}
              <div id={styles.social_media_icons_para}>
                {router.locale == "en" ? <p>Follow us</p> : <p>تابعنا</p>}
                {/* Social media icons */}
                <div id={styles.social_media_container}>
                  <a
                    href="https://www.facebook.com/evestofficialar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Images/footer/facebook.svg"
                      width="24px"
                      height="24px"
                      layout="intrinsic"
                      alt="facebook icon"
                    />
                  </a>
                  <a
                    href="https://twitter.com/evestofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Images/footer/twitter.svg"
                      width="24px"
                      height="24px"
                      layout="intrinsic"
                      alt="twitter icon"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/evest_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Images/footer/instagram.svg"
                      width="24px"
                      height="24px"
                      layout="intrinsic"
                      alt="instagram icon"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCgOHoUCzElFju7HgkuHLzfw/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Images/footer/youtube.svg"
                      width="24px"
                      height="24px"
                      layout="intrinsic"
                      alt="youtube icon"
                    />
                  </a>
                </div>
              </div>
              {/* apps icons */}
              <div>
                {router.locale == "en" ? (
                  <p>Download the app</p>
                ) : (
                  <p>حمّل التّطبيق</p>
                )}
                {/* apps icons */}
                <div id={styles.apps_container}>
                  <a
                    href="https://apps.apple.com/il/app/evest-stocks-crypto-trading/id1560191184?l=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className={styles.app_icon}
                      src="/Images/footer/app_store.svg"
                      width="40%"
                      height="40%"
                      layout="intrinsic"
                      alt="icon"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.pandats.evest&gl=IL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className={styles.app_icon}
                      src="/Images/footer/google_play.svg"
                      width="40%"
                      height="40%"
                      layout="intrinsic"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* first section mobile */}
          <div id={styles.first_section_container_mobile}>
            <div id={styles.logo_social_media_icons_container}>
              <Image
                src="/Images/footer/logo.svg"
                height="36px"
                width="100px"
                layout="intrinsic"
                alt="evest logo"
              />
              {/* Social media icons */}
              <div id={styles.social_media_container}>
                <a
                  href="https://www.facebook.com/evestofficialar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Images/footer/facebook.svg"
                    width="24px"
                    height="24px"
                    layout="intrinsic"
                    alt="facebook icon"
                  />
                </a>
                <a
                  href="https://twitter.com/evestofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Images/footer/twitter.svg"
                    width="24px"
                    height="24px"
                    layout="intrinsic"
                    alt="twitter icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com/evest_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Images/footer/instagram.svg"
                    width="24px"
                    height="24px"
                    layout="intrinsic"
                    alt="instagram icon"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCgOHoUCzElFju7HgkuHLzfw/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Images/footer/youtube.svg"
                    width="24px"
                    height="24px"
                    layout="intrinsic"
                    alt="youtube icon"
                  />
                </a>
              </div>
            </div>
            <div id={styles.para_col}>
              {router.locale == "en" ? (
                <p>
                  The information on this site is not intended for use by any{" "}
                  <br />
                  person in any country or jurisdiction where such distribution
                  or <br />
                  use would be contrary to local law or regulation{" "}
                </p>
              ) : (
                <p>
                  المعلومات الواردة في هذا الموقع ليست مخصصة للاستخدام من
                  <br />
                  قبل أي شخص في أي بلد أو ولاية قضائية حيث يكون هذا التوزيع
                  <br /> أو سيكون الاستخدام مخالفًا للقانون أو اللوائح المحلية
                </p>
              )}
            </div>
            <div>
              {router.locale == "en" ? (
                <p>Download the app</p>
              ) : (
                <p>حمّل التّطبيق</p>
              )}
              {/* apps icons */}
              <div id={styles.apps_container}>
                <a
                  href="https://apps.apple.com/il/app/evest-stocks-crypto-trading/id1560191184?l=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={styles.app_icon}
                    src="/Images/footer/app_store.svg"
                    width="40%"
                    height="40%"
                    layout="intrinsic"
                    alt="icon"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.pandats.evest&gl=IL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={styles.app_icon}
                    src="/Images/footer/google_play.svg"
                    width="40%"
                    height="40%"
                    layout="intrinsic"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Three lists (get in touch , additional links, trading ) */}
          <div id={styles.second_section_container}>
            <div>
              {router.locale == "en" ? (
                <h3>Get in touch</h3>
              ) : (
                <h3>تواصل معنا</h3>
              )}
              <hr />
              <p>support@evest.com</p>
              {router.locale == "en" ? (
                <p>
                  Atriafinancial LTD, S.I.P. Building , P.O Box 3010
                  <br />
                  Rue Pasteur , Port Vila Vanuatu.
                </p>
              ) : (
                <p>
                  شركة أتريا المالية المحدودة طريق كومول <br />
                  السريع مبنى جوفانت 1276 بورت فيلا فانواتوايوي اومولوجيتس
                </p>
              )}

              {router.locale == "en" ? (
                <a href="/company/contact-us">Contact us </a>
              ) : (
                <a href="/ar/الشركة/اتصل-بنا?lang=ar">اتصل بنا </a>
              )}
              <br />
              <br />
              {router.locale == "en" ? (
                <h4>UAE - Toll-Free:</h4>
              ) : (
                <h4>الإمارات العربية المتحدة - اتصال مجاني:</h4>
              )}
              <p>+971-800-0311-1248</p>
              {router.locale == "en" ? (
                <h4>Saudi Arabia - Toll-Free:</h4>
              ) : (
                <h4>المملكة العربية السعودية - اتصال مجاني:</h4>
              )}
              <p>+966-800-850-1019</p>
            </div>
            <div>
              {router.locale == "en" ? <h3>Trading</h3> : <h3>التّداول</h3>}
              <hr />
              {router.locale == "en" ? (
                <a href="/start-trading/trading-account-types#/">
                  Trading Account Types
                </a>
              ) : (
                <a href="/ar/start-trading/trading-account-types#/">
                  أنواع حسابات التّداول
                </a>
              )}
              <br />
              <br />
              {router.locale == "en" ? (
                <a href="/trading-services/0-commission-on-stocks">
                  0 Commission Stocks Trading
                </a>
              ) : (
                <a href="/ar/trading-services/0-commission-on-stocks">
                  0% عمولة تداول الأسهم
                </a>
              )}
              <br />
              <br />
              {router.locale == "en" ? (
                <a href="/start-trading/trading-demo-account">
                  Trading Demo Account
                </a>
              ) : (
                <a href="/ar/start-trading/trading-demo-account">
                  حساب تداول تجريبي{" "}
                </a>
              )}
              <br />
              <br />
              {router.locale == "en" ? (
                <a href="/trading-services/islamic-trading-account">
                  Islamic Trading Account
                </a>
              ) : (
                <a href="/ar/trading-services/islamic-trading-account">
                  حساب تداول اسلامي{" "}
                </a>
              )}
            </div>
            <div>
              {router.locale == "en" ? (
                <h3>Additional Links</h3>
              ) : (
                <h3>روابط إضافية</h3>
              )}
              <hr />
              {router.locale == "en" ? (
                <a href="/company/regulatory-authorization#/">
                  Regulatory Authorization
                </a>
              ) : (
                <a href="/ar/الشركة/تراخيص-التداول?lang=ar#/">
                  {" "}
                  التنظيم والخصوصية
                </a>
              )}
              <br />
              <br />
              {router.locale == "en" ? (
                <a href="/start-trading/deposit-withdrawal">
                  Deposits & Withdrawals
                </a>
              ) : (
                <a href="/ar/start-trading/deposit-withdrawal">
                  الودائع والسحوبات
                </a>
              )}
              <br />
              <br />
              {router.locale == "en" ? (
                <a href="https://evestpartners.com/">Become Partner</a>
              ) : (
                <a href="https://evestpartners.com/">كُن شريكًا</a>
              )}
              <br />
              <br />
              {router.locale == "en" ? (
                <a href="/start-trading/trading-hours#/">Trading Hours</a>
              ) : (
                <a href="/ar/start-trading/trading-hours#/">أوقات التّداول </a>
              )}
              <br />
              <br />
              {router.locale == "en" ? (
                <a href="/start-trading/trading-fees">Trading Fees</a>
              ) : (
                <a href="/ar/start-trading/trading-fees?lang=ar">
                  رسوم التّداول
                </a>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Darker footer (regulatory and licensing) */}
      <div className={styles.Footer_2}>
        <Container>
          <div id={styles.credit_card_container}>
            <Image
              src="/Images/footer/wire.svg"
              width="33px"
              height="33px"
              layout="intrinsic"
              alt="icon"
            />
            <Image
              src="/Images/footer/american_express.svg"
              width="52px"
              height="14.5px"
              layout="intrinsic"
              alt="icon"
            />
            <Image
              src="/Images/footer/visa.svg"
              width="46px"
              height="15px"
              layout="intrinsic"
              alt="icon"
            />
            <Image
              src="/Images/footer/master_card.svg"
              width="35px"
              height="27px"
              layout="intrinsic"
              alt="icon"
            />
            <Image
              src="/Images/footer/maestro.svg"
              width="35px"
              height="27px"
              layout="intrinsic"
              alt="icon"
            />
            <Image
              src="/Images/footer/visa_electron.svg"
              width="45px"
              height="25px"
              layout="intrinsic"
              alt="icon"
            />
            <Image
              src="/Images/footer/skrill.svg"
              width="38px"
              height="13px"
              layout="intrinsic"
              alt="icon"
            />
            <Image
              src="/Images/footer/netller.svg"
              width="52px"
              height="9px"
              layout="intrinsic"
              alt="icon"
            />
          </div>
        </Container>
        <hr></hr>
        <Container>
          {/* long paragraph */}
          <div id={styles.footer2_long_paragraph_col}>
            {router.locale == "en" ? (
              <p>
                The websites{" "}
                <span className={styles.underlined_span}>www.evest.com </span>
                and{"  "}
                <span className={styles.underlined_span}>mena.evest.com </span>
                are operated by ATRIAFINANCIAL LTD, which is licensed to carry
                on the business of dealing in securities. <br />
                <br />
                ATRIAFINANCIAL LTD is authorized and regulated by the Vanuatu
                Financial Services Commission{" "}
                <span className={styles.bolded_span}>(VFSC) </span>under license
                number <span className={styles.bolded_span}>17910</span>.
                <br />
                <br />
                EVEST is a brand owned by ATRIAFINANCIAL HOLDINGS LTD, a company
                incorporated in the United Kingdom with registration number
                <span className={styles.bolded_span}> 12745548</span>.
                <br />
                <br />
                ATRIAFINANCIAL SA (PTY) LTD, is regulated by the South African
                Financial Sector Conduct Authority{" "}
                <span className={styles.bolded_span}>(FSCA)</span>.FSCA license
                number
                <span className={styles.bolded_span}> 36060</span>. <br />
                <br />
                ATRIAFINANCIAL BUSINESS SERVICES LTD, is a subsidiary of
                ATRIAFINANCIAL HOLDINGS LTD <br />
                and it is incorporated in the Republic of Cyprus with
                registration number HE{" "}
                <span className={styles.bolded_span}> 419548</span>,
                <br />
                having its registered address at Athallasas 62, Mezzanine,
                Strovolos, Nicosia, Cyprus,
                <br />
                is a Paying Agent of ATRIAFINANCIAL LTD, all payments related to
                Paysafe will be processed by Atriafinancial Business Services
                Ltd.
                <br />
                ATRIAFINANCIAL CAPITAL LIMITED, a company incorporated in United
                Kingdom with registration number{" "}
                <span className={styles.bolded_span}> 10356128</span>, <br />
                having its registered address at 11 Blackheath Village, London,
                England, SE3 9LA, is a Paying Agent of ATRIAFINANCIAL LTD.{" "}
                <br />
                <br />
                <br />
                <br />
                <br />
                Risk Warning: Trading Contracts For Difference (CFD) is highly
                speculative, carries a high level of risk and is not appropriate
                for every investor. <br />
                Any advice provided on this website is general advice only, and
                has been prepared without taking your individual objectives,
                <br />
                financial situation or needs into account. Before deciding to
                trade CFDs offered by mena.evest.com,
                <br />
                you should carefully consider your objectives, financial
                situation, needs and level of experience, and consider seeking
                independent professional advice.
                <br />
                By trading, you may sustain a loss of some or all of your
                invested capital, therefore, you should not speculate with
                capital that you cannot afford to lose.
                <br />
                You should be aware of all the risks associated with trading on
                margin. Please read the full{" "}
                <a
                  href="/Legal_Documents/EN-RISK_DISCLOSURE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.bolded_span}>
                    Risk Disclosure Statement
                  </span>{" "}
                </a>
                and{" "}
                <a
                  href="/Legal_Documents/EN-TERMS_AND_CONDITIONS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.bolded_span}>
                    Terms and Conditions
                  </span>
                </a>
                . <br />
                <br />
                <span className={styles.bolded_span}>
                  Please note that Evest.com does not offer services to US,
                  Canadian and EU countries residents
                </span>
              </p>
            ) : (
              <p>
                يتم تشغيل مواقع الويب
                <span className={styles.underlined_span}> www.evest.com </span>و
                {"  "}
                <span className={styles.underlined_span}>mena.evest.com </span>
                بواسطة شركة أتريا فاينانشال المحدودة المرخص لها بممارسة أعمال
                التعامل في الأوراق المالية. <br />
                <br />
                ATRIAFINANCIAL LTD هي شركة تابعة لشركة ATRIAFINANCIAL HOLDINGS
                LTD ومرخصة ومنظمة من قبل لجنة الخدمات المالية بفانواتو
                <span className={styles.bolded_span}>(VFSC) </span> بموجب ترخيص
                رقم <span className={styles.bolded_span}>17910</span>.
                <br />
                <br />
                EVEST هي علامة تجارية مملوكة لشركة أتريا فاينانشال القابضة
                المحدودة، وهي شركة تأسست في المملكة المتحدة برقم تسجيل
                <span className={styles.bolded_span}> 12745548</span>.
                <br />
                <br />
                ATRIAFINANCIAL SA (PTY) LTD ، هي شركة تابعة لشركة ATRIAFINANCIAL
                HOLDINGS LTD وهي منظمة من قبل هيئة سلوك القطاع المالي في جنوب
                إفريقيا <span className={styles.bolded_span}>(FSCA)</span>. رقم
                ترخيص FSCA
                <span className={styles.bolded_span}> 36060</span>. <br />
                <br />
                أتريا فاينانشال بزنس سيرفيسز المحدودة هي شركة تابعة لشركة أتريا
                فاينانشال القابضة المحدودة وتأسست في جمهورية قبرص <br />
                برقم تسجيل{" "}
                <span className={styles.bolded_span}> HE 419548</span>,
                <br />
                وعنوانها المسجل في أثالاساس 62، ميزانين، ستروفولوس، نيقوسيا،
                قبرص،
                <br />
                هي وكيل دفع لشركة أتريا فاينانشال المحدودة، وستتم معالجة جميع
                المدفوعات المتعلقة بـ Paysafe بواسطة أتريا فاينانشال بزنس
                سيرفيسز المحدودة.
                <br />
                أتريا فاينانشال كابيتال المحدودة، وهي شركة تأسست في المملكة
                المتحدة برقم تسجيل{" "}
                <span className={styles.bolded_span}> 10356128</span>, <br />
                وعنوانها المسجل في 11 بلاك هيث فيلاج 11، لندن ، إنجلترا، SE3 9LA
                ، هي وكيل دفع لشركة أتريا فاينانشال المحدودة. <br />
                <br />
                <br />
                <br />
                <br />
                تحذير من المخاطر: تداول العقود مقابل الفروقات (CFD) ينطوي على
                درجة عالية من المضاربة ، وينطوي على درجة عالية من المخاطر ولا
                يناسب كل مستثمر. <br />
                أي نصيحة يتم تقديمها على هذا الموقع هي نصيحة عامة فقط ، وقد تم
                إعدادها دون مراعاة أهدافك الفردية أو وضعك المالي أو احتياجاتك.
                <br />
                قبل أن تقرر تداول العقود مقابل الفروقات التي تقدمها evest.com ،
                يجب أن تفكر بعناية في أهدافك ووضعك المالي واحتياجاتك ومستوى
                خبرتك ،
                <br />
                والتفكير في طلب مشورة مهنية مستقلة. من خلال التداول ، قد تتعرض
                لخسارة بعض أو كل رأس المال المستثمر الخاص بك ،
                <br />
                وبالتالي ، لا ينبغي عليك المضاربة برأس مال لا يمكنك تحمل خسارته.
                <br />
                يجب أن تكون على دراية كاملة بكافة المخاطر المصاحبة لعمليات تداول
                على الهامش. يرجى قراءة بيان{" "}
                <a
                  href="/Legal_Documents/EN-RISK_DISCLOSURE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.bolded_span}>الإفصاح عن المخاطر</span>{" "}
                </a>
                و{" "}
                <a
                  href="/Legal_Documents/EN-TERMS_AND_CONDITIONS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.bolded_span}>الشروط والأحكام</span>
                </a>
                . <br />
                <br />
                يرجى ملاحظة أن Evest.com لا يقدم خدمات للمقيمين في الولايات
                المتحدة الأمريكية واليابان وكندا وجمهورية كوريا الديمقراطية
                والاتحاد الروسي ودول المنطقة الاقتصادية الأوروبية
              </p>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
