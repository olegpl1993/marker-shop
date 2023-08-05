"use client";
import "./product.scss";
import Spinner from "@/components/Spinner/Spinner";
import { Product } from "@/types";
import { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

function ProductPage(props: Props) {
  const { id } = props.params;
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    fetch("/api/products/" + id)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  if (data === null) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (data) {
    return (
      <div className="product">
        <div className="product__imgBox">
          <img
            className="product__img"
            src={data.gallery[0]}
            alt={data.name}
            loading="lazy"
          />
        </div>
        <div className="product__descriptionBox">
          <div>Products sku: {id}</div>
          <div>Имя: {data?.name}</div>
          <div>Цена: {data?.price}</div>
          <div>Описание: {data?.description}</div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
