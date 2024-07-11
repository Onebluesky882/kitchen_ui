import { MenuCartItem } from "@/types/MenuItem";
import { createContext } from "react";
import { mockTables } from "../Database/mockTable";

export type TableType = {
  cart: MenuCartItem[];
  no: number;
  status: string;
};

type GlobalContextType = {
  cart: MenuCartItem[];
  setCart: React.Dispatch<React.SetStateAction<MenuCartItem[]>>;
  table: TableType[];
};

export const GlobalContext = createContext<GlobalContextType>({
  cart: [],
  setCart: () => null,
  table: [],
});

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <GlobalContext.Provider
      value={{
        cart: [],
        setCart: () => null,
        table: mockTables,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
