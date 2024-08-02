"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cartSlice";
import { Product } from "@/shared/types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { IconButton, Paper } from "@mui/material";
import { Alegreya } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./StoreCard.scss";

const alegreya = Alegreya({
  weight: ["400", "500"],
  subsets: ["latin"],
});

interface Props {
  product: Product;
}

function StoreCard(props: Props) {
  const { product } = props;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const available = !!product.sizes.length;
  const [isHovered, setIsHovered] = useState(false);

  const cart = useAppSelector((state) => state.cartReducer.cart);
  const isProductInCart = cart.find((item) => item.id === product.sku)!!;

  const handleAddToCart = () => {
    dispatch(addToCart(product.sku));
  };

  const handleRedirectToCart = () => {
    router.push("/cart");
  };

  return (
    <Paper elevation={2} className="storeCard">
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
        <Link href={`/store/${product.sku}`} className="storeCard__name">
          {product.name}
        </Link>
        <div className="storeCard__row">
          <div className="storeCard__price">
            {product.price}
            <p className={`storeCard__priceSymbol ${alegreya.className}`}>₴</p>
          </div>
          {available ? (
            <div className="storeCard__available storeCard__available_true">
              Есть в наличии
            </div>
          ) : (
            <div className="storeCard__available storeCard__available_false">
              Нет в наличии
            </div>
          )}
          {isProductInCart ? (
            <IconButton
              className="storeCard__cart"
              onClick={handleRedirectToCart}
              disabled={!available}
            >
              <ShoppingCartCheckoutIcon
                className={`storeCard__cartIcon ${
                  !available ? "storeCard__cartIcon_disabled" : ""
                }`}
              />
            </IconButton>
          ) : (
            <IconButton
              className="storeCard__cart"
              onClick={handleAddToCart}
              disabled={!available}
            >
              <ShoppingCartIcon
                className={`storeCard__cartIcon ${
                  !available ? "storeCard__cartIcon_disabled" : ""
                }`}
              />
            </IconButton>
          )}
        </div>
      </div>
    </Paper>
  );
}

export default StoreCard;
