import { GlobalContext, TableType } from "@/Hooks/GlobalContext";
import { MenuCartItem } from "@/types/MenuItem";
import React, { useContext } from "react";

const TablesPageLayout = ({ children }: React.PropsWithChildren) => {
  return <div style={{ maxWidth: "800px", margin: "0 auto" }}>{children}</div>;
};

const TableContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        // justifyContent: "space-between",
        gap: "12px",
        marginTop: "16px",
      }}
    >
      {children}
    </div>
  );
};

const Table = ({ table: { no, cart } }: { table: TableType }) => {
  return (
    <div
      style={{
        position: "relative",
        background: "lightBlue",
        width: "200px",
        height: "320px",
        padding: "8px",
      }}
    >
      <TableNumber no={no} />
      {cart.map((order) => (
        <Order key={order.name} order={order} />
      ))}
      {/* <Order />
      <Order />
      <Order />
      <Order />
      <Order /> */}
    </div>
  );
};

const TableNumber = ({ no }: { no: number }) => {
  return (
    <div
      style={{
        background: "#ff9999",
        borderRadius: "24px",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
      }}
    >
      Table {no}
    </div>
  );
};

const Order = ({ order }: { order: MenuCartItem }) => {
  return (
    <div
      style={{
        background: "green",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>{order.name}</div>
      <div>{order.amount}</div>
    </div>
  );
};

const TablesPage = () => {
  const { tables } = useContext(GlobalContext);
  return (
    <TablesPageLayout>
      <div style={{ background: "gray" }}>
        <h2>TablesPage</h2>
        <TableContainer>
          {tables.map((table) => (
            <Table key={table.no} table={table} />
          ))}
          {/* 
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
          <Table /> 
          */}
        </TableContainer>
      </div>
    </TablesPageLayout>
  );
};

export default TablesPage;
