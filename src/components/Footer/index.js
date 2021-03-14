import React from "react";
import { FaTractor } from "react-icons/fa";

import LogoBar from "./LogoBar";
import TopNavbar from "./TopNavbar";

import styles from "./Footer.module.css";

export default function index() {
  return (
    <>
      <div className={styles.redBackground}>
        <div className="container py-2 align-middle">
          <TopNavbar />
          <LogoBar />
          <div
            className="row"
            style={{
              fontSize: 14,
              fontFamily: "Pragati Narrow",
              cursor: "pointer",
              color: "#fff",
              borderTop: "1px solid #fff",
              borderBottom: "1px solid #fff",
            }}
          >
            <span style={{ width: "20vw", fontWeight: "400", fontsize: 33 }}>
              {" "}
              wwww.yedpar.com.tr{" "}
            </span>
            <span
              style={{
                borderRight: "1px solid",
                borderColor: "#FFF",
                width: "5vw",
              }}
            >
              <FaTractor size={22} style={{ marginRight: 10 }} />
              Anasayfa
            </span>
            <span
              style={{
                borderRight: "1px solid",
                borderColor: "#FFF",
                width: "5vw",
                paddingLeft: 14,
              }}
            >
              Ürün Arama
            </span>
            <span
              className="col-sm-12 col-md-1 col-lg-1 col-xl-1"
              style={{
                borderRight: "1px solid",
                borderColor: "#FFF",
                width: "10vw",
              }}
            >
              Hakkımızda
            </span>
            <span
              style={{
                borderRight: "1px solid",
                borderColor: "#FFF",
                width: "5vw",
                paddingLeft: 14,
              }}
            >
              Yeni Ürünler
            </span>
            <span
              style={{
                borderRight: "1px solid",
                borderColor: "#FFF",
                width: "4vw",
                paddingLeft: 14,
              }}
            >
              İndirim
            </span>
            <span
              style={{
                borderRight: "1px solid",
                borderColor: "#FFF",
                width: "6vw",
                paddingLeft: 14,
                paddingRight: 14,
              }}
            >
              Fırsat Ürünleri
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
