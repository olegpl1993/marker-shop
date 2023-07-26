import "./Header.scss";
import Logo from "../Logo/Logo";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="menu">
        <Link href={"/store"} className="menu__link">
          Магазин
        </Link>
        <Link href={"/contacts"} className="menu__link">
          Контакты
        </Link>
        <Link href={"/about"} className="menu__link">
          О нас
        </Link>
      </div>
      <Link href={"/cart"}>
        <IconButton className="cartBoxIcon">
          <ShoppingCartIcon sx={{ color: "white", fontSize: 28 }} />
        </IconButton>
      </Link>
    </header>
  );
}

export default Header;
