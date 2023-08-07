import "./ProductDescription.scss";
import { Product } from "@/types";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "500"],
  subsets: ["cyrillic"],
});

interface Props {
  productData: Product;
}

function ProductDescription(props: Props) {
  const { productData } = props;
  return (
    <div className={`productDescription ${roboto.className}`}>
      <div className="productDescription__name">{productData.name}</div>
      <div className="productDescription__descriptionRow">
        <div className="productDescription__category">
          {productData.category}
        </div>
        <div className="productDescription__sku">Код: {productData.sku}</div>
      </div>
      <div className="productDescription__vendor">
        Бренд: {productData.vendor}
      </div>
      <div className="productDescription__price">
        Цена: {productData.price}₴
      </div>
      <div className="productDescription__color">Цвет: {productData.color}</div>
      <div className="productDescription__model">
        Модель: {productData.model}
      </div>
      <div className="productDescription__weight">
        Вес: {productData.weight}
      </div>

      {productData.sizes && (
        <div className="productDescription__sizes">
          {productData.sizes.map((item) => (
            <div key={item.size} className="productDescription__size">
              Размер: {item.size} - {item.amount} шт.
            </div>
          ))}
        </div>
      )}

      <div className="productDescription__description">
        Описание: {productData.description}
      </div>
    </div>
  );
}

export default ProductDescription;
