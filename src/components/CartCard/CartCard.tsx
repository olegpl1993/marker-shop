"use client";
import "./CartCard.scss";
import { CartProduct } from "@/types";
import { IconButton, Paper, TextField } from "@mui/material";
import Link from "next/link";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart, deleteFromCart, minusQty } from "@/redux/slices/cartSlice";

interface Props {
  cartProduct: CartProduct;
}

function CartCard(props: Props) {
  const { product, qty } = props.cartProduct;
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    dispatch(deleteFromCart(product.sku));
  };

  const handleMinusQty = () => {
    dispatch(minusQty(product.sku));
  };

  const handlePlusQty = () => {
    dispatch(addToCart(product.sku));
  };

  return (
    <Paper elevation={3} className="cartCard">
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
          <div className="cartCard__row">
            <div className="cartCard__name"> {product.name}</div>
            <IconButton
              className="cartCard__remove"
              onClick={handleRemoveFromCart}
            >
              <RemoveShoppingCartIcon className="cartCard__removeIcon" />
            </IconButton>
          </div>
          <div className="cartCard__row">
            <div className="cartCard__category">{product.category}</div>
            <div className="cartCard__sku">Код: {product.sku}</div>
          </div>
        </div>
      </div>

      <div className="cartCard__row">
        <div className="cartCard__qtyBox">
          <IconButton className="cartCard__icon" onClick={handleMinusQty}>
            -
          </IconButton>
          <div className="cartCard__qty">{qty}</div>
          <IconButton className="cartCard__icon" onClick={handlePlusQty}>
            +
          </IconButton>
        </div>
        <div className="cartCard__price">{product.price}₴</div>
      </div>
    </Paper>
  );
}

export default CartCard;
