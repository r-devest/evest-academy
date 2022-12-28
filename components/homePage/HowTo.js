import React, { use } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { UseTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function HowTo() {
  const { locale } = useRouter();
  const { e: translate } = useTranslation("HowTo");
  return (
    <div>
      <h1>locale:{locale}</h1>
      {/* <h2>{translate("HowTo")}</h2> */}
      <h2>
        <Link href="/" locale={locale}>
          Go to How to
        </Link>
      </h2>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["HowTo"])),
      //will be passed to the page component as props
    },
  };
}
