"use client";
import { Product } from "@/types";
import "./StoreCard.scss";

interface Props {
  product: Product;
}

function StoreCard(props: Props) {
  const { product } = props;

  return (
    <div className="storeCard">
        <div className="storeCard__name">{product.name}</div>
        <div className="storeCard__price">{product.price}</div>
        <div className="storeCard__description">{product.description}</div>
    </div>
  );
}

export default StoreCard;
