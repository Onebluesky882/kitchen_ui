import type { TableType } from "@/Hooks/GlobalContext";
import { MenuCartItem } from "@/types/MenuItem";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";

export const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "1280px",
        margin: "0 auto",
        backgroundColor: "#FBF8EE",

        columnGap: "12px",
        rowGap: "10px",
        justifyContent: "center",
        paddingBlock: "10px",
      }}
    >
      {children}
    </div>
  );
};

export const TableContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className="glass"
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "10px",
        padding: "10px",
        position: "relative",
        display: "flex",
        paddingBottom: "120px",
      }}
    >
      {children}
    </div>
  );
};
export const TableNumber = ({ no }: { no: number }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
      }}
    >
      <img
        style={{
          position: "absolute",
          transform: "translateY(-50%)",
          alignItems: "center",
          left: "100px",
          top: "-25px",
        }}
        src="/lable.png"
        width={"120px"}
        height={"50px"}
      />
      <p
        style={{
          display: "flex",
          position: "absolute",
          fontSize: "30px",
          transform: "translateY(-50%)",
          left: "125px",
          top: "-25px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        โต๊ะ<span style={{ marginLeft: "10px" }}>{no}</span>
      </p>
    </div>
  );
};

const statusDone: React.CSSProperties = {
  backgroundColor: "#19990e",
  color: "white",
  // position: "absolute",
  // bottom: "10px",
};

const statusPanding: React.CSSProperties = {
  backgroundColor: "#F6ECD2",
};

const CartItem = ({ item, index }: { item: MenuCartItem; index: number }) => {
  return (
    <div
      style={{
        border: "1px solid #FBF8EE",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        borderRadius: "10px",
        padding: "5px",
        alignItems: "center",
        ...(item.status === "done" ? statusDone : statusPanding),
      }}
    >
      <p style={{ marginRight: "10px", fontSize: "20px" }}>{index + 1}.</p>
      <img src={item.image} width={40} />{" "}
      <span style={{ marginLeft: "10px" }}></span>
      <p style={{ marginRight: "10px", fontSize: "22px" }}>
        {item.name}{" "}
        <span
          style={{
            marginLeft: "10px",
          }}
        >
          จำนวน : {item.amount}
        </span>
        <span style={{ marginLeft: "15px" }}>
          {item.status === "done" ? (
            <VscDebugRestart
              style={{ fontSize: "30px", marginBottom: "-10px" }}
            />
          ) : (
            <FaSquareArrowUpRight
              style={{ fontSize: "30px", marginBottom: "-10px" }}
            />
          )}
        </span>
      </p>
    </div>
  );
};

export const OrderList = ({ table: { no, cart } }: { table: TableType }) => {
  const preparingCart = cart.filter((cart) => cart.status !== "done");
  const doneCart = cart.filter((cart) => cart.status === "done");
  return (
    <div style={{ marginTop: "50px" }}>
      <TableNumber no={no} />
      <div
        style={{
          display: "grid",
          gap: "10px",
          justifyContent: "start",
        }}
      >
        {preparingCart.map((item, index) => (
          <CartItem item={item} index={index} />
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          justifyContent: "start",
          position: "absolute",
          bottom: "10px",
        }}
      >
        {doneCart.map((item, index) => (
          <CartItem item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
