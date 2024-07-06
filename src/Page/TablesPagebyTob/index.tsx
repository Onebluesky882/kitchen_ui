import { GlobalContext, TableType } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { MenuCartItem } from "@/types/MenuItem";
import { IoChevronForwardCircle } from "react-icons/io5";

const TablePageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        height: "900px",
        backgroundColor: "white",
        margin: "0 auto",
        borderRadius: "10px",
        borderColor: "#f0f0f0",
        borderStyle: "solid",
        borderWidth: 1,
      }}
    >
      {children}
    </div>
  );
};

const TableContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",

        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

const Tables = ({ table: { no, cart } }: { table: TableType }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        border: "1px",
        borderStyle: "solid",
        borderColor: "#F0F0F0",
        backgroundColor: "#87ADFA",
        borderRadius: "10px",
        left: "50px",
        marginLeft: "20px",
        padding: "10px",
      }}
    >
      <TableNumber no={no} />

      {cart.map((item: MenuCartItem) => (
        <Order order={item} />
      ))}
    </div>
  );
};

const Order = ({
  order: { id, image, name, amount },
}: {
  order: MenuCartItem;
}) => {
  return (
    <div
      style={{
        marginTop: "-30px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: "10px",
        paddingLeft: "10px",
        backgroundColor: "#ebca38",
        borderRadius: "8px",
        border: "0.5px solid #9e9d99",
      }}
      key={id}
    >
      <img src={image} width={65} />
      <p>{name}</p>
      <p>
        {" "}
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>จำนวน</span>
        {amount}
      </p>
      <IoChevronForwardCircle
        size={40}
        style={{ marginLeft: "10px", color: "white" }}
      />
    </div>
  );
};
const TableNumber = ({ no }: { no: number }) => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          position: "absolute",
          bottom: "20px",
          left: "0px",
        }}
        src="/notepin.png"
        width={40}
      />
      <h3
        style={{
          marginTop: "10px",
          paddingBottom: "20px",
          color: "white",
          textAlign: "center",
          fontSize: "26px",
        }}
      >
        โต๊ะ A{no}
      </h3>
    </div>
  );
};

const TablePageTob = () => {
  const { tables } = useContext(GlobalContext);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ออเดอร์เมนู</h1>
      <TablePageLayout>
        <TableContainer>
          {tables.map((item) => (
            <Tables key={item.no} table={item} />
          ))}
        </TableContainer>
      </TablePageLayout>
      ;
    </div>
  );
};

export default TablePageTob;
