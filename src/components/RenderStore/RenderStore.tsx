"use client";
import { Product } from "@/types";
import "./RenderStore.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeProducts } from "@/redux/slices/productsSlice";
import { useEffect } from "react";
import StoreCard from "../StoreCard/StoreCard";

interface Props {
  products: Product[];
}

function RenderStore(props: Props) {
  const { products } = props;
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.productsState.products);

  useEffect(() => {
    dispatch(changeProducts(products));
  }, []);

  console.log(productsState);

  return (
    <div className="renderStore">
      {productsState.map((product) => (
        <StoreCard key={product.sku} product={product} />
      ))}
    </div>
  );
}

export default RenderStore;
