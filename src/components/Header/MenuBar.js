import React from "react";
import { FaTractor } from "react-icons/fa";

export default function MenuBar() {
  return (
    <div
      className="container"
      style={{
        fontSize: 16,
        fontFamily: "Pragati Narrow", cursor: "pointer"
      }}
    >
      <div className="row" style={{ backgroundColor: "#fff", marginTop: 10 }}>
        <span style={{ width: "10vw" }} />
        <span
          style={{
            borderRight: "1px solid",
            borderColor: "#000",
            width: "5vw",
          }}
        >
          <FaTractor size={22} style={{ marginRight: 10 }} />
          Anasayfa
        </span>
        <span
          style={{
            borderRight: "1px solid",
            borderColor: "#000",
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
            borderColor: "#000",
            width: "10vw",
          }}
        >
          Hakkımızda
        </span>
        <span
          style={{
            borderRight: "1px solid",
            borderColor: "#000",
            width: "5vw",
            paddingLeft: 14,
          }}
        >
          Yeni Ürünler
        </span>
        <span
          style={{
            borderRight: "1px solid",
            borderColor: "#000",
            width: "4vw",
            paddingLeft: 14,
          }}
        >
          İndirim
        </span>
        <span
          style={{
            borderRight: "1px solid",
            borderColor: "#000",
            width: "6vw",
            paddingLeft: 14,
            paddingRight: 14,
          }}
        >
          Fırsat Ürünleri
        </span>
        <span
          style={{
            borderRight: "1px solid",
            borderColor: "#000",
            width: "5vw",
            paddingLeft: 14,
          }}
        >
          İletişim
        </span>
        <span style={{ width: "10vw" }} />
      </div>
    </div>
  );
}
