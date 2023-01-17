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

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
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
              color: props.font_color,
              border: props.border,
              borderRadius: "50px",
              background: isActive ? "red" : "transparent",
            }}
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
