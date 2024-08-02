"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart, deleteFromCart, minusQty } from "@/redux/slices/cartSlice";
import { CartProduct } from "@/shared/types";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { IconButton, Paper } from "@mui/material";
import { Alegreya } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./CartCard.scss";

const alegreya = Alegreya({
  weight: ["400", "500"],
  subsets: ["latin"],
});

interface Props {
  cartProduct: CartProduct;
}

function CartCard(props: Props) {
  const { product, qty } = props.cartProduct;
  const dispatch = useAppDispatch();

  const qtyInStock = Number(
    product.sizes.reduce((acc, item) => acc + item.amount, 0)
  );

  const handleRemoveFromCart = () => {
    dispatch(deleteFromCart(product.sku));
  };

  const handleMinusQty = () => {
    dispatch(minusQty(product.sku));
  };

  const handlePlusQty = () => {
    if (qty < qtyInStock) {
      dispatch(addToCart(product.sku));
    }
  };

  const msq = window.matchMedia("(max-width: 767px)");
  const [isMobile, setIsMobile] = useState(msq.matches);

  const changeWidth = () => {
    if (msq.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    msq.addEventListener("change", changeWidth);
    return () => {
      msq.removeEventListener("change", changeWidth);
    };
  }, []);

  const QtyPriceRow = () => {
    return (
      <div className="cartCard__row">
        <div className="cartCard__qtyBox">
          <IconButton
            className="cartCard__icon"
            disabled={qty <= 1}
            onClick={handleMinusQty}
          >
            -
          </IconButton>
          <div className="cartCard__qty">{qty}</div>
          <IconButton
            className="cartCard__icon"
            disabled={qty >= qtyInStock}
            onClick={handlePlusQty}
          >
            +
          </IconButton>
        </div>
        <div className="cartCard__price">
          {product.price * qty}
          <p className={`cartCard__priceSymbol ${alegreya.className}`}>₴</p>
        </div>
      </div>
    );
  };

  return (
    <Paper elevation={2} className="cartCard">
      <div className="cartCard__box">
        <Link href={`/store/${product.sku}`} className="cartCard__imgBox">
          <img
            className="cartCard__img"
            src={product.gallery[0]}
            alt={product.name}
            loading="lazy"
          />
        </Link>

        <div className="cartCard__description">
          <div className="cartCard__topCol">
            <div className="cartCard__topRow">
              <Link href={`/store/${product.sku}`} className="cartCard__name">
                {product.name}
              </Link>
              <IconButton
                className="cartCard__remove"
                onClick={handleRemoveFromCart}
              >
                <RemoveShoppingCartIcon className="cartCard__removeIcon" />
              </IconButton>
            </div>
            <div className="cartCard__row">
              <div className="cartCard__inStock">
                В наличие: {qtyInStock} шт.
              </div>
              <div className="cartCard__sku">Код: {product.sku}</div>
            </div>
          </div>

          {!isMobile && <QtyPriceRow />}
        </div>
      </div>
      {isMobile && <QtyPriceRow />}
    </Paper>
  );
}

export default CartCard;
