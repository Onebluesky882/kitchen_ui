import { OrderList, PageLayout, TableContainer } from "@/Components/TableCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

export const TablesV2 = () => {
  const { table } = useContext(GlobalContext);
  return (
    <PageLayout>
      {table.map((cart) => (
        <TableContainer>
          <OrderList key={cart.no} table={cart} />
        </TableContainer>
      ))}
    </PageLayout>
  );
};
