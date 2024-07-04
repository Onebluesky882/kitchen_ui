export type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type MenuCartItem = MenuItem & { amount: number; table: number };
