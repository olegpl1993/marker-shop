"use client";
import "./Header.scss";
import Logo from "../Logo/Logo";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import Menu from "../Menu/Menu";
import { useAppSelector } from "@/redux/hooks";

function Header() {
  const cart = useAppSelector((state) => state.cartReducer.cart);
  const qtyProductsInCart = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="header">
      <Logo />
      <Menu />
      <Link href={"/cart"}>
        <IconButton className="header__cartBoxIcon">
          {qtyProductsInCart > 0 && (
            <div className="header__productsQty">{qtyProductsInCart}</div>
          )}
          <ShoppingCartIcon className="header__cartIcon" />
        </IconButton>
      </Link>
    </header>
  );
}

export default Header;
