"use client";
import "./product.scss";
import Spinner from "@/components/Spinner/Spinner";
import { useGetProductsQuery } from "@/redux/services/productsApi";

interface Props {
  params: {
    id: string;
  };
}

function ProductPage(props: Props) {
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
        <div className="product__imgBox">
          <img
            className="product__img"
            src={productData.gallery[0]}
            alt={productData.name}
            loading="lazy"
          />
        </div>
        <div className="product__descriptionBox">
          <div>Products sku: {id}</div>
          <div>Имя: {productData?.name}</div>
          <div>Цена: {productData?.price}</div>
          <div>Описание: {productData?.description}</div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
