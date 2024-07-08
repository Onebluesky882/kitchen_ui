import { GlobalContext, TableType } from "@/Hooks/GlobalContext";
import React, { useContext } from "react";

export const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "1000px",
        margin: "0 auto",
        backgroundColor: "#D6DAA5",
        padding: "15px",
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
      style={{
        backgroundColor: "white",
        width: "280px",
        height: "180px",
        border: "1px solid blue",
        borderRadius: "10px",
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
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
          left: "110px",
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
          left: "140px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        โต๊ะ<span style={{ marginLeft: "10px" }}>{no}</span>
      </p>
    </div>
  );
};
export const OrderList = ({ table: { no, cart } }: { table: TableType }) => {
  const statusDone = {
    backgroundColor: "green",
  };
  const statusPanding = {
    backgroundColor: "yellow",
  };

  return (
    <>
      <TableNumber no={no} />
      <div
        style={{
          position: "absolute",
          left: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {cart.map((item) => (
          <div
            style={{
              alignItems: "center",
              border: "1px solid black",
              display: "flex",
              ...(item.status === "done" ? statusDone : statusPanding),
            }}
          >
            <img src={item.image} width={40} />{" "}
            <span style={{ marginLeft: "10px" }}></span>
            <p style={{ marginRight: "10px" }}>
              {item.name}{" "}
              <span style={{ marginLeft: "10px" }}>{item.amount}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
