import React from "react";

import LogoBar from "./LogoBar";
import TopNavbar from "./TopNavbar";

import styles from "./Header.module.css";
import MenuBar from "./MenuBar";

export default function index() {
  return (
    <>
      <div className={styles.redBackground}>
        <div className="container py-2 align-middle">
          <TopNavbar />
          <LogoBar />
        </div>
      </div>
      <MenuBar />
    </>
  );
}
