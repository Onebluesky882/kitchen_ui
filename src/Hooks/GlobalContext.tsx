import { MenuCartItem } from "@/types/MenuItem";
import { createContext, useState } from "react";

type GlobalContextType = {
  cart: MenuCartItem[];
  setCart: React.Dispatch<React.SetStateAction<MenuCartItem[]>>;
  tables: TableType[];
};

export type TableType = {
  cart: MenuCartItem[];
  status: string;
  no: number;
};

export const GlobalContext = createContext<GlobalContextType>({
  cart: [],
  setCart: () => null,
  tables: [],
});

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  // const [cart, setCart] = useState<MenuCartItem[]>([]);
  const mockTables = [
    {
      cart: [],
      status: "in-progress",
      no: 1,
    },
    {
      cart: [
        {
          id: 0,
          name: "เนื้อสามชั้น",
          price: 205,
          image: "/beef_pics/เนื้อสามชั้น.png",
          amount: 5,
        },
        {
          id: 1,
          name: "เนื้อน่องลาย",
          price: 205,
          image: "/beef_pics/เนื้อน่องลาย.png",
          amount: 1,
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
        },
      ],
      status: "in-progress",
      no: 2,
    },
    {
      cart: [],
      status: "free",
      no: 3,
    },
  ];

  return (
    <GlobalContext.Provider
      value={{
        cart: [],
        setCart: () => null,
        tables: mockTables,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
