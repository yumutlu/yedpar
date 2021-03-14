import { FaSearch, FaLock, FaTractor } from "react-icons/fa";
import styles from "./Header.module.css";

export default function LogoBar() {
  return (
    <div className="row">
      <div className="col-sm-12 col-m-3 col-lg-3 col-xl-3">
        <img src="./logo.png" alt="logo" />
      </div>
      <div className="col-sm-12 col-m-6 col-lg-6 col-xl-6">
        <div class="input-group mb-3" style={{ marginTop: 30 }}>
          <input
            type="text"
            class="form-control font-italic text-secondary"
            placeholder="Ürün, marka, model, oem ara..."
            aria-describedby="button-addon2"
            style={{
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              backgroundColor: "#fff",
              color: "#6c757d",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              height: 50,
            }}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-light"
              type="button"
              id="button-addon2"
              style={{
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                width: 70,
                backgroundColor: "#fff",
                color: "#6c757d",
                borderTopWidth: 0,
                borderBottomWidth: 0,
              }}
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-m-3 col-lg-3 col-xl-3 ">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic example"
          style={{ marginTop: 30 }}
        >
          <button
            type="button"
            class="btn btn-light"
            style={{
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              backgroundColor: "#fff",
              color: "#6c757d",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              height: 50,
              paddingHorizontal: 13,
            }}
          >
            <div>Giriş Yap</div>
            <div className={styles.miniFont}>veya kayıt ol</div>
          </button>
          <button
            type="button"
            class="btn btn-light"
            style={{
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#fff",
              color: "#6c757d",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              height: 50,
            }}
          >
            <FaLock size={22} />
          </button>
        </div>

        <div
          class="btn-group px-2"
          role="group"
          aria-label="Basic example"
          style={{ marginTop: 30 }}
        >
          <button
            type="button"
            class="btn btn-light"
            style={{
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              backgroundColor: "#fff",
              color: "#6c757d",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              height: 50,
            }}
          >
            <span class={`${styles.btnCircle} btn btn-dangerbtn btn-danger`}>
              123
            </span>
          </button>
          <button
            type="button"
            class="btn btn-light"
            style={{
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#fff",
              color: "#6c757d",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              height: 50,
            }}
          >
            <FaTractor size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
