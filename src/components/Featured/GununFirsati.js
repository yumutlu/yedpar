import React from "react";
import { FaTractor } from "react-icons/fa";

import styles from "./Featured.module.css";

export default function GununFirsati() {
  const imageData = [
    {
      id: 0,
      name: "lamborghini",
      url: "../../images/lambo.jog",
    },
  ];

  return (
    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
      <div
        className="m-1"
        style={{ backgroundColor: "white", borderRadius: 5 }}
      >
        <span
          className="container"
          style={{ paddingLeft: 60, fontWeight: "bold" }}
        >
          Günün Fırsatları
        </span>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                style={{
                  width: 200,
                  height: 200,
                  justifyContent: "center",
                  backgroundSize: "cover",
                  borderRadius: 20,
                  border: "1px solid #c1c1c1",
                  marginLeft: 20,
                  marginBottom: 10,
                  backgroundImage:
                    "url(https://source.unsplash.com/random/203x170)",
                }}
              />
            </div>

            <div className="carousel-item">
              <div
                style={{
                  width: 200,
                  height: 200,
                  justifyContent: "center",
                  backgroundSize: "cover",
                  borderRadius: 20,
                  border: "1px solid #c1c1c1",
                  marginLeft: 20,
                  marginBottom: 10,
                  backgroundImage:
                    "url(https://source.unsplash.com/random/200x171)",
                }}
              />
            </div>

            <div className="carousel-item">
              <div
                style={{
                  width: 200,
                  height: 200,
                  justifyContent: "center",
                  backgroundSize: "cover",
                  borderRadius: 20,
                  border: "1px solid #c1c1c1",
                  marginLeft: 20,
                  marginBottom: 10,
                  backgroundImage:
                    "url(https://source.unsplash.com/random/201x172)",
                }}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            MF 240 Fren Diski
          </div>
          <div style={{ marginLeft: 55, paddingRight: 5, paddingBottom: 10 }}>
            OEM
            <span style={{ color: "#808080", marginLeft: 10 }}>3578658</span>
            <div
              style={{
                color: "#FF0000",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              2.750 TL
              <span
                style={{
                  color: "#000",
                  fontSize: 17,
                  textDecorationLine: "line-through",
                  marginLeft: 10,
                }}
              >
                3000 TL
              </span>
            </div>
            <div
              style={{
                border: "0.5px solid gray",
                padding: 4,
                height: 35,
                width: 150,
              }}
            >
              <FaTractor size={20} style={{ marginRight: 10 }} />
              <button
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: " #FFFFFF",
                  width: 110,
                }}
                type="button"
                class="btn btn-warning"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
