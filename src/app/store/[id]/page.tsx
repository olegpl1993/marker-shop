"use client";
import Gallery from "@/components/Gallery/Gallery";
import "./product.scss";
import Spinner from "@/components/Spinner/Spinner";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import ProductDescription from "@/components/ProductDescription/ProductDescription";

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
        <Gallery productData={productData} />
        <ProductDescription productData={productData} />
      </div>
    );
  }
}

export default Product;
