import "./ProductDescription.scss";
import { Product } from "@/types";
import { Alegreya } from "next/font/google";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const alegreya = Alegreya({
  weight: ["400", "500"],
  subsets: ["latin"],
});

interface Props {
  productData: Product;
}

function ProductDescription(props: Props) {
  const { productData } = props;
  return (
    <div className="productDescription">
      <div className="productDescription__name">{productData.name}</div>

      <div className="productDescription__categoryRow">
        <div className="productDescription__category">
          {productData.category}
        </div>
        <div className="productDescription__sku">Код: {productData.sku}</div>
      </div>

      <div className="productDescription__priceRow">
        <div className="productDescription__price">
          {productData.price}
          <p
            className={`productDescription__priceSymbol ${alegreya.className}`}
          >
            ₴
          </p>
        </div>
        <Button
          variant="contained"
          className="productDescription__button"
          size="large"
          onClick={() => {
            console.log("КУПИТЬ");
          }}
        >
          <ShoppingCartIcon sx={{ color: "white", fontSize: 28 }} />
          КУПИТЬ
        </Button>
      </div>

      {productData.sizes && (
        <div className="productDescription__sizes">
          {productData.sizes.map((item) => (
            <div key={item.size} className="productDescription__size">
              {item.size} - {item.amount} шт.
            </div>
          ))}
        </div>
      )}

      {productData.color && (
        <div className="productDescription__color">
          Цвет: {productData.color}
        </div>
      )}

      {productData.model && (
        <div className="productDescription__model">
          Модель: {productData.model}
        </div>
      )}

      {productData.vendor && (
        <div className="productDescription__vendor">
          Бренд: {productData.vendor}
        </div>
      )}

      {productData.weight && (
        <div className="productDescription__weight">
          Вес: {productData.weight} гр.
        </div>
      )}

      {productData.description && (
        <div className="productDescription__description">
          {productData.description}
        </div>
      )}
    </div>
  );
}

export default ProductDescription;
