import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { MenuCardProps } from "./menuCard/MenuCard";

export const ClipboardOrder = ({ id, image, name, price }: MenuCardProps) => {
  const { cart, setCart } = useContext(GlobalContext);

  const menuItem = cart.find((item) => item.name === name);
  const amount = menuItem?.amount ?? 0;

  const onAdd = () => {
    if (amount > 9) {
      return;
    }
    // new  object = [...cart]
    const newCart = [...cart];
    if (amount === 0) {
      newCart.push({
        id,
        name,
        image,
        price,
        amount: 1,
      });
      setCart(newCart);
      return;
    }
    // ค้นหา
    const cartItem = newCart.find((item) => item.name === name);
    //ถ้าเจอ
    if (cartItem) {
      cartItem.amount++;
    }
    setCart(newCart);
    console.log(newCart);
  };

  const onMinus = () => {
    if (amount === 0) {
      return;
    }

    // declare new object
    const newCart = [...cart];
    // find index unique
    const cartItemIndex = newCart.findIndex((item) => item.name === name);

    if (cartItemIndex !== -1) {
      newCart[cartItemIndex].amount--;

      if (newCart[cartItemIndex].amount === 0) {
        newCart.splice(cartItemIndex, 1);
      }
      setCart(newCart);
      console.log(newCart);
    }
  };

  return (
    <>
      <div>{name}</div>
    </>
  );
};
