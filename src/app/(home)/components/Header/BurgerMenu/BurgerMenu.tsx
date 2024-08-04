"use client";
import { useAppSelector } from "@/redux/hooks";
import Modal from "@/shared/components/Modal/Modal";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./BurgerMenu.scss";

function BurgerMenu() {
  const cart = useAppSelector((state) => state.cartReducer.cart);
  const qtyProductsInCart = cart.reduce((acc, item) => acc + item.qty, 0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <IconButton
        onClick={() => {
          setIsOpen(true);
        }}
        className="burgerMenu"
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
        <div className="burgerMenu__modal">
          <Link
            href={"/store"}
            onClick={() => {
              setIsOpen(false);
            }}
            className="burgerMenu__link"
          >
            Магазин
          </Link>
          <Link
            href={"/contacts"}
            onClick={() => {
              setIsOpen(false);
            }}
            className="burgerMenu__link"
          >
            Контакты
          </Link>

          <IconButton
            className="burgerMenu__cartBoxIcon"
            onClick={() => {
              router.push("/cart");
              setIsOpen(false);
            }}
          >
            <ShoppingCartIcon className="burgerMenu__cartIcon" />
            {qtyProductsInCart > 0 && (
              <div className="burgerMenu__productsQty">{qtyProductsInCart}</div>
            )}
          </IconButton>
        </div>
      </Modal>
    </>
  );
}

export default BurgerMenu;
