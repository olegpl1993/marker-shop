"use client";
import { Product } from "@/types";
import "./StoreCard.scss";
import { Paper } from "@mui/material";

interface Props {
  product: Product;
}

function StoreCard(props: Props) {
  const { product } = props;

  return (
    <Paper elevation={3} className="storeCard">
      <div className="storeCard__name">{product.name}</div>
      <div className="storeCard__price">{product.price}</div>
      <div className="storeCard__description">{product.description}</div>
    </Paper>
  );
}

export default StoreCard;
