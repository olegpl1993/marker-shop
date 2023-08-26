"use client";
import CartCard from "@/components/CartCard/CartCard";
import "./cart.scss";
import { useAppSelector } from "@/redux/hooks";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { CartProduct } from "@/types";
import { Button } from "@mui/material";
import { Alegreya } from "next/font/google";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import Checkout from "@/components/Checkout/Checkout";

const alegreya = Alegreya({
  weight: ["400", "500"],
  subsets: ["latin"],
});

function Cart() {
  const { data } = useGetProductsQuery(null);

  const [isOpen, setIsOpen] = useState(false);

  const cart = useAppSelector((state) => state.cartReducer.cart);
  const cartProducts = cart.reduce((acc: CartProduct[], item) => {
    const product = data?.find((product) => product.sku === item.id);
    if (product) {
      acc.push({ product, qty: item.qty });
    }
    return acc;
  }, []);

  const summary = cartProducts.reduce(
    (acc, item) => acc + item.qty * item.product.price,
    0
  );

  if (cartProducts.length === 0) {
    return (
      <div className="cart">
        <h1 className="cart__empty">Корзина пустая</h1>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart__titleRow">
        <h1 className="cart__title">Корзина</h1>
      </div>

      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
        <div className="cart__modal">
          <Checkout />
        </div>
      </Modal>

      <div className="cart__box">
        <div className="cart__content">
          {cartProducts.map((cartProduct) => (
            <CartCard key={cartProduct.product.sku} cartProduct={cartProduct} />
          ))}
        </div>

        <div className="cart__checkout">
          <div className="cart__checkoutCol">
            <div className="cart__priceRow">
              <p className="cart__summary">Итого</p>
              <div className="cart__price">
                {summary}
                <p className={`cart__priceSymbol ${alegreya.className}`}>₴</p>
              </div>
            </div>
            <Button
              type="button"
              variant="contained"
              className="cart__button"
              size="large"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
