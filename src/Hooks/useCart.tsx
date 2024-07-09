import { MenuCartItem, MenuItem } from "@/types/MenuItem";
import { useState } from "react";

// ตั้งชื่อนำหน้าด้วย use กฏของ react hook
export const useCart = () => {
  const [cart, setCart] = useState<MenuCartItem[]>([]);

  const onAdd = ({ id, name, image, price }: MenuItem) => {
    const menuItem = cart.find((item) => item.name === name);
    const amount = menuItem?.amount ?? 0;

    if (amount > 9) {
      return;
    }

    const newCart = [...cart];
    if (amount === 0) {
      newCart.push({
        id,
        name,
        image,
        price,
        amount: 1,
        status: "",
      });
      setCart(newCart);
      return;
    }

    const cartItem = newCart.find((item) => item.name === name);
    if (cartItem) {
      cartItem.amount++;
    }
    setCart(newCart);
  };

  // return ตัวแปร
  return { cart, setCart, onAdd };
};

// export ออกในรูปแบบ objects type
export const defaultCartProvider = {
  cart: [],
  setCart: () => null,
  onAdd: () => null,
};
