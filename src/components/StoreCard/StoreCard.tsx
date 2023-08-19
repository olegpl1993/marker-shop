"use client";
import { Product } from "@/types";
import "./StoreCard.scss";
import { IconButton, Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, deleteFromCart } from "@/redux/slices/cartSlice";

interface Props {
  product: Product;
}

function StoreCard(props: Props) {
  const { product } = props;
  const dispatch = useAppDispatch();
  const available = !!product.sizes.length;
  const [isHovered, setIsHovered] = useState(false);

  const cart = useAppSelector((state) => state.cartReducer.cart);
  const isProductInCart = cart.find((item) => item.id === product.sku)!!;

  const handleAddToCart = () => {
    dispatch(addToCart(product.sku));
  };

  const handleDeleteFromCart = () => {
    dispatch(deleteFromCart(product.sku));
  };

  return (
    <Paper elevation={3} className="storeCard">
      <Link href={`/store/${product.sku}`} className="storeCard__imgBox">
        <img
          className="storeCard__img"
          src={
            isHovered && product.gallery[1]
              ? product.gallery[1]
              : product.gallery[0]
          }
          alt={product.name}
          loading="lazy"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </Link>
      <div className="storeCard__descriptionBox">
        <Link
          href={`/store/${product.sku}`}
          className="storeCard__name"
        >
          {product.name}
        </Link>
        <div className="storeCard__row">
          <div className="storeCard__price">{product.price}₴</div>
          {available ? (
            <div
              className="storeCard__available storeCard__available_true"
            >
              Есть в наличии
            </div>
          ) : (
            <div
              className="storeCard__available storeCard__available_false"
            >
              Нет в наличии
            </div>
          )}
          {isProductInCart ? (
            <IconButton
              className="storeCard__cart"
              onClick={handleDeleteFromCart}
            >
              <ShoppingCartCheckoutIcon
                sx={{ color: "rgb(0, 144, 184)", fontSize: 28 }}
              />
            </IconButton>
          ) : (
            <IconButton className="storeCard__cart" onClick={handleAddToCart}>
              <ShoppingCartIcon
                sx={{ color: "rgb(0, 144, 184)", fontSize: 28 }}
              />
            </IconButton>
          )}
        </div>
      </div>
    </Paper>
  );
}

export default StoreCard;
