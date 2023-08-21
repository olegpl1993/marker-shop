"use client";
import CartCard from "@/components/CartCard/CartCard";
import "./cart.scss";
import { useAppSelector } from "@/redux/hooks";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { CartProduct } from "@/types";

function Cart() {
  const { data } = useGetProductsQuery(null);
  const cart = useAppSelector((state) => state.cartReducer.cart);

  const cartProducts = cart.reduce((acc: CartProduct[], item) => {
    const product = data?.find((product) => product.sku === item.id);
    if (product) {
      acc.push({ product, qty: item.qty });
    }
    return acc;
  }, []);

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
      <section className="cart__content">
        {cartProducts.map((cartProduct) => (
          <CartCard key={cartProduct.product.sku} cartProduct={cartProduct} />
        ))}
      </section>
    </div>
  );
}

export default Cart;
