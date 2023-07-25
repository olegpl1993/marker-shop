"use client";
import { Product } from "@/types";
import "./StoreCard.scss";
import { IconButton, Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "500"],
  subsets: ["cyrillic"],
});

interface Props {
  product: Product;
}

function StoreCard(props: Props) {
  const { product } = props;
  const available = !!product.sizes.length;

  return (
    <Paper elevation={3} className="storeCard">
      <div className="storeCard__imgBox">
        <img
          className="storeCard__img"
          src={product.gallery[0]}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="storeCard__descriptionBox">
        <div className={`storeCard__name ${roboto.className}`}>
          {product.name}
        </div>
        <div className="storeCard__row">
          <div className="storeCard__price">{product.price}₴</div>
          {available ? (
            <div className={`storeCard__available storeCard__available_true ${roboto.className}`}>
              Есть в наличии
            </div>
          ) : (
            <div className={`storeCard__available storeCard__available_false ${roboto.className}`}>
              Нет в наличии
            </div>
          )}
          <IconButton className="storeCard__cart">
            <ShoppingCartIcon
              sx={{ color: "rgb(0, 144, 184)", fontSize: 28 }}
            />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}

export default StoreCard;
