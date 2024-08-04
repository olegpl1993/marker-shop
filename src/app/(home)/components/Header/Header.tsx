"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeCart } from "@/redux/slices/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import "./Header.scss";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

function Header() {
  const cart = useAppSelector((state) => state.cartReducer.cart);
  const qtyProductsInCart = cart.reduce((acc, item) => acc + item.qty, 0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [];
    dispatch(changeCart(storedCart));
  }, []);

  return (
    <header className="header">
      <Logo />
      <Menu />
      <Link href={"/cart"} className="header__cartLink">
        <IconButton className="header__cartBoxIcon">
          {qtyProductsInCart > 0 && (
            <div className="header__productsQty">{qtyProductsInCart}</div>
          )}
          <ShoppingCartIcon className="header__cartIcon" />
        </IconButton>
      </Link>
      <BurgerMenu />
    </header>
  );
}

export default Header;
