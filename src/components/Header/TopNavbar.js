import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";

export default function TopNavbar() {
  return (
    <div
      className="row"
      style={{
        borderBottom: "1px solid",
        borderColor: "#fff",
        paddingBottom: 4,
      }}
    >
      <div className="col-sm-12 col-m-12 col-lg-3 col-xl-3 text-light font-italic">
        EVERYHING THAT MAKES A TRACTOR MOVE
      </div>
      <div className="col-sm-12 col-m-12 col-lg-5 col-xl-5" />
      <div className="col-sm-12 col-m-12 col-lg-3 col-xl-3 text-light font-weight-light">
        <img
          src="./ukflag.png"
          style={{ height: 10, width: 15 }}
          alt="English"
        />
        ENG <span className="ml-3">$ 7,3705</span>
        <span className="ml-3">€ 7,3705</span>
      </div>
      <div
        className="col-sm-12 col-m-12 col-lg-1 col-xl-1 text-light font-weight-light"
        style={{
          borderLeft: "1px solid",
          borderColor: "#fff",
          paddingBottom: 4,
        }}
      >
        <span style={{ paddingRight: 4 }}>
          <FaInstagram size={13} />
        </span>
        <span style={{ paddingRight: 4 }}>
          <FaFacebookSquare size={13} />
        </span>
        <span style={{ paddingRight: 4 }}>
          <FaTwitter size={13} />
        </span>
      </div>
    </div>
  );
}
