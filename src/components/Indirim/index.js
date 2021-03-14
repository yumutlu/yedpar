import React from "react";
import { FaTractor } from "react-icons/fa";

export default function index() {
  let firsat = (
    <div className="m-1" style={{ backgroundColor: "white", borderRadius: 5 }}>
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
  );

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-2"
          style={{ borderBottom: 0, fontSize: 20, fontWeight: 500 }}
        >
          İndirimli Ürünler
        </div>
        <div className="col-10" style={{ borderBottom: "1px solid #000" }} />
      </div>
      <div className="row">
        <div className="col">{firsat}</div>
        <div className="col">{firsat}</div>
        <div className="col">{firsat}</div>
        <div className="col">{firsat}</div>
      </div>
    </div>
  );
}
