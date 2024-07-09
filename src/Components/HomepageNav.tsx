import { Link } from "react-router-dom";

const Button = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={url}>
      <button
        style={{
          padding: "20px",
          borderRadius: "8px",
          margin: "20px",
          fontSize: "25px",
        }}
      >
        {" "}
        {name}{" "}
      </button>
    </Link>
  );
};

const HomepageNav = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        marginTop: "30px",
        width: "1000px",
        height: "1000px",
        justifyContent: "start",
        border: "1px solid #c5c7c5",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        เมนูระบบ
      </h1>
      <div>
        <Button name="ออเดอร์" url="tablesv2" key={"tablesv2"} />
        <Button name="เมนูอาหาร" url="menu" key={"menu"} />
        <Button name="เรียกเด็กเสิร์ฟ" url="menu" key={"menu"} />
        <Button name="รายการย้อนหลัง" url="history" key={"menu"} />
      </div>
    </div>
  );
};

export default HomepageNav;
