'use client';
import { Product } from "@/types";
import "./RenderStore.scss";

interface Props {
  products: Product[];
}

function RenderStore(props: Props) {
  const { products } = props;
  console.log(products);

  return (
    <div className="productsBox">
      {products.map((product) => (
        <div key={product.sku}>{product.name}</div>
      ))}
    </div>
  );
}

export default RenderStore;
