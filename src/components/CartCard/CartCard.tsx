"use client";
import "./CartCard.scss";
import { CartProduct } from "@/types";
import { Paper } from "@mui/material";

interface Props {
  cartProduct: CartProduct;
}

function CartCard(props: Props) {
  const { cartProduct } = props;
  return (
    <Paper elevation={3} className="cartCard">
        {cartProduct.product.name} - {cartProduct.qty}
    </Paper>
  );
}

export default CartCard;
