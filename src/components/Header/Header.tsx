import "./Header.scss";
import Logo from "../Logo/Logo";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import Menu from "../Menu/Menu";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Menu />
      <Link href={"/cart"}>
        <IconButton className="header__cartBoxIcon">
          <ShoppingCartIcon className="header__cartIcon" />
        </IconButton>
      </Link>
    </header>
  );
}

export default Header;
