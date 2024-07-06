import { ClipboardOrder, HomeIcon, Logo, OrderList } from "./headerStyle";

export default function Header() {
  return (
    <header className="header">
      <HomeIcon />
      <Logo />
      <ClipboardOrder />
      <OrderList />
      <SidebarLeft />
      <SidebarRight />
    </header>
  );
}
