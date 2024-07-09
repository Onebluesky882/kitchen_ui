# custom hook state

กฏของการสร้าง จะต้องใช้ use นำหน้าทุกกรณี

```tsx
1. สร้าง useCart.tsx (custom hook)
 // return ตัวแปร
  return { cart, setCart, onAdd };

2. สร้างตัวแปรเก็บ object
export const defaultCartProvider = {
  cart: [],
  setCart: () => null,
  onAdd: () => null,
  onMinus: () => null,
};


3. นำไปใช้ใน Global context

export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,
});


4. type GlobalContextType = {
    cartProvider : ReturnType<typeof useCart>;
}


5. export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
   const cartProvider = useCart();

return (
<GlobalContext.Provider value={{ cartProvider }}>
{children}
</GlobalContext.Provider>
);
};
```

# global useContext

```tsx
// parrent เปิดประตูให้เห็นข้อมูล createContext
// child รับข้อมูล useContext
type GlobalContextType = {
  cart: MenuCartItem[];
  setCart: React.Dispatch<React.SetStateAction<MenuCartItem[]>>;
  tables: TableType[];
};

export const GlobalContext = createContext<GlobalContextType>({
  cart: [],
  setCart: () => null,
});

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
```
