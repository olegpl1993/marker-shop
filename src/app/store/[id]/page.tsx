"use client";
import Galery from "@/components/Galery/Galery";
import "./product.scss";
import Spinner from "@/components/Spinner/Spinner";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "500"],
  subsets: ["cyrillic"],
});

interface Props {
  params: {
    id: string;
  };
}

function Product(props: Props) {
  const { id } = props.params;
  const { isLoading, isFetching, data, error } = useGetProductsQuery(null);
  const productData = data?.find((product) => product.sku === id);

  if (isLoading || isFetching) {
    return (
      <div className="product">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className="product">Error</div>;
  }

  if (productData) {
    return (
      <div className="product">
        <Galery productData={productData} />

        <div className={`product__descriptionBox ${roboto.className}`}>
          <div className="product__name">{productData.name}</div>
          <div className="product__descriptionRow">
            <div className="product__category">{productData.category}</div>
            <div className="product__sku">Код: {productData.sku}</div>
          </div>
          <div className="product__vendor">Бренд: {productData.vendor}</div>
          <div className="product__price">Цена: {productData.price}₴</div>
          <div className="product__color">Цвет: {productData.color}</div>
          <div className="product__model">Модель: {productData.model}</div>
          <div className="product__weight">Вес: {productData.weight}</div>

          {productData.sizes && (
            <div className="product__sizes">
              {productData.sizes.map((item) => (
                <div key={item.size} className="product__size">
                  Размер: {item.size} - {item.amount} шт.
                </div>
              ))}
            </div>
          )}

          <div className="product__description">
            Описание: {productData.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
