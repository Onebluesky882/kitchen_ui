import { MenuCartItem } from "@/types/MenuItem";
import { createContext } from "react";

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
      cart: [
        {
          id: 0,
          name: "เนื้อสามชั้น",
          price: 205,
          image: "/beef_pics/เนื้อสามชั้น.png",
          amount: 5,
          status: "done",
        },
        {
          id: 1,
          name: "เนื้อน่องลาย",
          price: 205,
          image: "/beef_pics/เนื้อน่องลาย.png",
          amount: 1,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
      ],
      status: "complete",
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
          status: "done",
        },
        {
          id: 1,
          name: "เนื้อน่องลาย",
          price: 205,
          image: "/beef_pics/เนื้อน่องลาย.png",
          amount: 1,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
      ],
      status: "complete",
      no: 2,
    },
    {
      cart: [
        {
          id: 0,
          name: "เนื้อสามชั้น",
          price: 205,
          image: "/beef_pics/เนื้อสามชั้น.png",
          amount: 5,
          status: "done",
        },
        {
          id: 1,
          name: "เนื้อน่องลาย",
          price: 205,
          image: "/beef_pics/เนื้อน่องลาย.png",
          amount: 1,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
      ],
      status: "complete",
      no: 3,
    },
    {
      cart: [
        {
          id: 0,
          name: "เนื้อสามชั้น",
          price: 205,
          image: "/beef_pics/เนื้อสามชั้น.png",
          amount: 5,
          status: "done",
        },
        {
          id: 1,
          name: "เนื้อน่องลาย",
          price: 205,
          image: "/beef_pics/เนื้อน่องลาย.png",
          amount: 1,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
      ],
      status: "complete",
      no: 4,
    },
    {
      cart: [
        {
          id: 0,
          name: "เนื้อสามชั้น",
          price: 205,
          image: "/beef_pics/เนื้อสามชั้น.png",
          amount: 5,
          status: "done",
        },
        {
          id: 1,
          name: "เนื้อน่องลาย",
          price: 205,
          image: "/beef_pics/เนื้อน่องลาย.png",
          amount: 1,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
      ],
      status: "complete",
      no: 5,
    },
    {
      cart: [
        {
          id: 0,
          name: "เนื้อสามชั้น",
          price: 205,
          image: "/beef_pics/เนื้อสามชั้น.png",
          amount: 5,
          status: "done",
        },
        {
          id: 1,
          name: "เนื้อน่องลาย",
          price: 205,
          image: "/beef_pics/เนื้อน่องลาย.png",
          amount: 1,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
      ],
      status: "complete",
      no: 6,
    },
    {
      cart: [
        {
          id: 0,
          name: "เนื้อสามชั้น",
          price: 205,
          image: "/beef_pics/เนื้อสามชั้น.png",
          amount: 5,
          status: "done",
        },
        {
          id: 1,
          name: "เนื้อน่องลาย",
          price: 205,
          image: "/beef_pics/เนื้อน่องลาย.png",
          amount: 1,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
      ],
      status: "complete",
      no: 7,
    },
    {
      cart: [
        {
          id: 0,
          name: "เนื้อสามชั้น",
          price: 205,
          image: "/beef_pics/เนื้อสามชั้น.png",
          amount: 5,
          status: "done",
        },
        {
          id: 1,
          name: "เนื้อน่องลาย",
          price: 205,
          image: "/beef_pics/เนื้อน่องลาย.png",
          amount: 1,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
      ],
      status: "complete",
      no: 8,
    },
    {
      cart: [
        {
          id: 0,
          name: "เนื้อสามชั้น",
          price: 205,
          image: "/beef_pics/เนื้อสามชั้น.png",
          amount: 5,
          status: "done",
        },
        {
          id: 1,
          name: "เนื้อน่องลาย",
          price: 205,
          image: "/beef_pics/เนื้อน่องลาย.png",
          amount: 1,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
        {
          id: 2,
          name: "เนื้อสันคอ",
          price: 205,
          image: "/beef_pics/สันคอเนื้อ.png",
          amount: 5,
          status: "in-progress",
        },
      ],
      status: "complete",
      no: 9,
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
