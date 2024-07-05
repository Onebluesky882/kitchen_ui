import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { LuClipboardSignature } from "react-icons/lu";
import { Link } from "react-router-dom";

export function HomeIcon() {
  return (
    <div
      style={{
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          fontSize: "30px",
          color: "#DF9E43",
        }}
        to={"/"}
      >
        <FaHome
          style={{
            display: "flex",
            alignItems: "center",
          }}
        />
      </Link>
    </div>
  );
}

export function Logo() {
  return (
    <div
      style={{
        width: "30%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={"/mmd_logo_1.png"} alt="logoname" style={{ height: 100 }} />
    </div>
  );
}

export function ClipboardOrder() {
  const { cart } = useContext(GlobalContext);

  let totalAmount = 0;
  cart.forEach((item) => (totalAmount += item.amount));

  return (
    <div
      style={{
        position: "relative",
        justifyContent: "center",
        display: "flex",
        left: "150px",
        top: "30px",
      }}
    >
      <Link to={"/clipboard"}>
        <FaClipboardList style={{ fontSize: "30", color: "#58A65C" }} />

        <span
          style={{
            position: "absolute",
            top: "25px",
            left: "8px",
            fontSize: "14px",
            color: "#58A65C",
            display: "flex",
            background: "white",
            borderRadius: "10px",
            padding: "3px",
            borderColor: "#58A65C",
            paddingRight: "2px",
            paddingLeft: "2px",
          }}
        >
          {totalAmount}
        </span>
      </Link>
    </div>
  );
}

export function OrderList() {
  const { cart } = useContext(GlobalContext);

  let totalAmount = 0;
  cart.forEach((item) => (totalAmount += item.amount));

  return (
    <div
      style={{
        display: "flex",
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Link to={"/cart"}>
          <LuClipboardSignature style={{ fontSize: "30", color: "#D5A154" }} />
          <span
            style={{
              position: "absolute",
              top: "25px",
              left: "8px",
              fontSize: "14px",
              color: "#DF9E43",
              display: "flex",
              background: "white",
              borderRadius: "10px",
              padding: "3px",
              borderColor: "#F6F6F6",
              paddingRight: "2px",
              paddingLeft: "2px",
            }}
          >
            {totalAmount}
          </span>
        </Link>
      </div>
    </div>
  );
}
