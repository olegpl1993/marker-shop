"use client";
import { Product } from "@/types";
import "./RenderStore.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeProducts } from "@/redux/slices/productsSlice";
import { useEffect } from "react";

interface Props {
  products: Product[];
}

function RenderStore(props: Props) {
  const { products } = props;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.productsState.products);

  useEffect(() => {
    dispatch(changeProducts(products));
  }, [])

  console.log(cart);

  return (
    <div className="renderStore">
      {products.map((product) => (
        <div key={product.sku} className="renderStore__card">{product.name}</div>
      ))}
    </div>
  );
}

export default RenderStore;
