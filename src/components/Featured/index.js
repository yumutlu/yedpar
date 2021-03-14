import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import fiat from "../../images/fiat.png";
import Ford from "../../images/ford.png";
import Masley from "../../images/Masleyferguson.png";
import NewHolland from "../../images/newHolland.jpg";
import JonDere from "../../images/jonh.png";
import Same from "../../images/same.jpg";
import Tümosan from "../../images/tümosan.png";
import GununFirsati from "./GununFirsati";

export default function index() {
  return (
    <div className="container mt-3">
      <div style={{ backgroundColor: "#b7b7b7", borderRadius: 5 }}>
        <div className="row row-eq-height">
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div
              className="m-1"
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              <ul className="list-group">
                <li className="list-group-item">
                  <img
                    src={Masley}
                    className="rounded float-left"
                    alt="fiat"
                    style={{ width: 20, height: 20, paddingRight: 5 }}
                  />
                  Massey Ferguson
                  <RiArrowRightSFill size={22} style={{ marginLeft: 40 }} />
                </li>
                <li className="list-group-item">
                  <img
                    src={NewHolland}
                    className="rounded float-left"
                    alt="fiat"
                    style={{ width: 20, height: 20, paddingRight: 5 }}
                  />
                  New Holland
                  <RiArrowRightSFill size={22} style={{ marginLeft: 70 }} />
                </li>
                <li className="list-group-item">
                  <img
                    src={fiat}
                    className="rounded float-left"
                    alt="fiat"
                    style={{ width: 20, height: 20, paddingRight: 5 }}
                  />
                  Fiat
                  <RiArrowRightSFill size={22} style={{ marginLeft: 135 }} />
                </li>
                <li className="list-group-item">
                  <img
                    src={Ford}
                    className="rounded float-left"
                    alt="fiat"
                    style={{ width: 20, height: 20, paddingRight: 5 }}
                  />
                  Ford
                  <RiArrowRightSFill size={22} style={{ marginLeft: 129 }} />
                </li>
                <li className="list-group-item">
                  <img
                    src={Same}
                    className="rounded float-left"
                    alt="fiat"
                    style={{ width: 20, height: 20, paddingRight: 5 }}
                  />
                  Same
                  <RiArrowRightSFill size={22} style={{ marginLeft: 120 }} />
                </li>
                <li className="list-group-item">
                  <img
                    src={JonDere}
                    className="rounded float-left"
                    alt="fiat"
                    style={{ width: 20, height: 20, paddingRight: 5 }}
                  />
                  Jonh Dere
                  <RiArrowRightSFill size={22} style={{ marginLeft: 88 }} />
                </li>
                <li className="list-group-item">
                  <img
                    src={Tümosan}
                    className="rounded float-left"
                    alt="fiat"
                    style={{ width: 20, height: 20, paddingRight: 5 }}
                  />
                  Tümosan
                  <RiArrowRightSFill size={22} style={{ marginLeft: 93 }} />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div
              className="m-1"
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1611095564350-2cbe940a8d99?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1615593716432-8908dcc27a70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
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
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>

          <GununFirsati />
        </div>
      </div>
    </div>
  );
}
