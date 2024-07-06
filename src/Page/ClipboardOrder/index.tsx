import ClipboardCard from "@/Components/ClipboardCard";
import { ClipboardOrder } from "@/Components/ClipboardOrder";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Cart = () => {
  // const { cart } = useContext(GlobalContext);
  const cart = [
    {
      id: 123,
      name: "name",
      price: 100,
      image: "./sth.png",
    },
  ];

  return (
    <ClipboardCard>
      {cart.map((item) => (
        <ClipboardOrder
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </ClipboardCard>
  );
};

export default Cart;
