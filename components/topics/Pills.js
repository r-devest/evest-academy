import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import styles from "../../styles/topics/Pills.module.css";
export default function Pills1(props) {
  const [isActive, setIsActive] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  const handleClick = () => {
    if (!isActive && !isWhite) {
      setIsActive(true);
      setIsWhite(true);
    } else {
      setIsActive(false);
      setIsWhite(false);
    }
  };

  return (
    <>
      <MDBTabs pills className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            href={props.link}
            onClick={handleClick}
            // active={basicActive === "tab1"}
            style={{
              color: isWhite ? "white" : "#16A2A0",
              border: props.border,
              borderRadius: "50px",
              background: isActive ? "#16A2A0" : "transparent",
            }}
            id={styles.pill}
          >
            {props.pill_text}
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      {/* <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab1"}></MDBTabsPane>
      </MDBTabsContent> */}
    </>
  );
}
