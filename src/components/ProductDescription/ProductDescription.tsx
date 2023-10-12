"use client";
import "./ProductDescription.scss";
import { Product } from "@/types";
import { Alegreya } from "next/font/google";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";

const alegreya = Alegreya({
  weight: ["400", "500"],
  subsets: ["latin"],
});

interface Props {
  productData: Product;
}

function ProductDescription(props: Props) {
  const { productData } = props;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const available = !!productData.sizes.length;
  const cart = useAppSelector((state) => state.cartReducer.cart);
  const isProductInCart = cart.find((item) => item.id === productData.sku)!!;

  const handleBuyProduct = () => {
    dispatch(addToCart(productData.sku));
    router.push("/cart");
  };

  const BuyButtonField = () => {
    if (available && !isProductInCart) {
      return (
        <Button
          variant="contained"
          className="productDescription__button"
          size="large"
          onClick={handleBuyProduct}
        >
          <ShoppingCartIcon className="productDescription__shoppingCartIcon" />
          КУПИТЬ
        </Button>
      );
    } else if (available && isProductInCart) {
      return (
        <div className="productDescription__notAvailable">
          Товар уже в корзине
        </div>
      );
    } else {
      return (
        <div className="productDescription__notAvailable">Нет в наличии</div>
      );
    }
  };

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
        <BuyButtonField />
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
