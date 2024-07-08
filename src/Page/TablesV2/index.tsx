import { OrderList, PageLayout, TableContainer } from "@/Components/TableCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

export const TablesV2 = () => {
  const { tables } = useContext(GlobalContext);
  return (
    <PageLayout>
      {tables.map((cart) => (
        <TableContainer>
          <OrderList key={cart.no} table={cart} />
        </TableContainer>
      ))}
    </PageLayout>
  );
};
