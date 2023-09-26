"use client";
import Gallery from "@/components/Gallery/Gallery";
import "./product.scss";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import ProductDescription from "@/components/ProductDescription/ProductDescription";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import CubeSpinner from "@/components/CubeSpinner/CubeSpinner";

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
        <CubeSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="product">Error</div>;
  }

  if (productData) {
    return (
      <div className="product">
        <BreadCrumbs productData={productData} />
        <div className="product__section">
          <Gallery productData={productData} />
          <ProductDescription productData={productData} />
        </div>
      </div>
    );
  }
}

export default Product;
