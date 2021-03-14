import React from "react";
import agco from "../../images/agco.png";
import valeo from "../../images/valeo.png";

export default function index() {
  return (
    <div class="container">
      <div className="row mt-3">
        <div className="col text-justify font-italic font-weight-bold text-secondary">
          THE MAJOR SUPPLIER OF TRACTOR SPARE PARTS IN TURKEY
        </div>
        <div className="col">
          TÜRKİYE’NİN EN BÜYÜK TRAKTÖR YEDEK PARÇA TEDARİKÇİSİ
        </div>
      </div>
      <div className="row mt-3">
        <div className="col" style={{ borderRight: "1px solid" }}>
          <img src={agco} alt="agco" />
        </div>
        <div className="col" style={{ borderRight: "1px solid" }}>
          <img src={valeo} alt="valeo" />
        </div>
        <div className="col" style={{ borderRight: "1px solid" }}>
          <img src={agco} alt="agco" />
        </div>
        <div className="col" style={{ borderRight: "1px solid" }}>
          <img src={valeo} alt="valeo" />
        </div>
      </div>
    </div>
  );
}
