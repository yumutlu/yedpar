import { FaSearch, FaLock, FaTractor } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function LogoBar() {
  return (
    <div className="row">
      <div className="col-sm-12 col-m-3 col-lg-3 col-xl-3">
        <img src="./logo.png" alt="logo" />
        <span style={{ width: "20vw" }}>
          FERHATPAŞA MAH. G13 SOK. NO 72 KAT 4 ATAŞEHİR - İSTANBUL - TÜRKİYE +90
          216 471 31 40 PBX info@yedpar.com.tr
        </span>
      </div>
      <div className="col-sm-12 col-m-6 col-lg-6 col-xl-7"></div>
      <div className="col-sm-12 col-m-3 col-lg-3 col-xl-2 ">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic example"
          style={{ marginTop: 30 }}
        >
          <img src="./download.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}
