"use cliet";
import { Product } from "@/types";
import "./Galery.scss";
import { useState } from "react";

interface Props {
  productData: Product;
}

function Galery(props: Props) {
  const { productData } = props;
  const [mainImg, setMainImg] = useState(productData.gallery[0]);

  return (
    <div className="galery">
      <img
        className="galery__mainImg"
        src={mainImg}
        alt={productData.name}
        loading="lazy"
      />
      <div className="galery__imgBox">
        {productData.gallery.map((img) => (
          <img
            key={img}
            className={`galery__smallImg ${mainImg === img ? "galery__smallImg_active" : ""}`}
            src={img}
            alt={productData.name}
            loading="lazy"
            onClick={() => setMainImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default Galery;
