"use client";
import "./cart.scss";
import { useAppSelector } from "@/redux/hooks";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Product } from "@/types";

interface RenderProductInCart {
  product: Product;
  qty: number;
}

function Cart() {
  const { data } = useGetProductsQuery(null);
  const cart = useAppSelector((state) => state.cartReducer.cart);

  const renderProductsInCart = cart.reduce(
    (acc: RenderProductInCart[], item) => {
      const product = data?.find((product) => product.sku === item.id);
      if (product) {
        acc.push({ product, qty: item.qty });
      }
      return acc;
    },
    []
  );
  console.log(renderProductsInCart);

  if (renderProductsInCart.length === 0) {
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
        {renderProductsInCart.map(({ product, qty }) => (
          <div className="cart__cartCard" key={product.sku}>
            {product.name} - {qty}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Cart;
