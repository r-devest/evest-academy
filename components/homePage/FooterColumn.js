import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FooterSubColumn from "./FooterSubColumn";
import styles from "../../styles/footer/FooterColumn.module.css";
export default function FooterColumn(props) {
  const [links, setLinks] = useState(props.data);

  //   useEffect(() => {
  //     console.log(links);
  //   }, []);
  return (
    <div className={styles.heading_container}>
      <h1 className={styles.column_heading}>{props.data.header}</h1>
      <hr />
      <div>
        {links.links.map((link) => {
          return <FooterSubColumn data={link} key={link.text} />;
        })}
      </div>
    </div>
  );
}
