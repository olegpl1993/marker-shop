"use client";
import Gallery from "@/components/Gallery/Gallery";
import "./RenderProduct.scss";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import ProductDescription from "@/components/ProductDescription/ProductDescription";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import CubeSpinner from "@/components/CubeSpinner/CubeSpinner";

interface Props {
  id: string;
}

function RenderProduct(props: Props) {
  const { id } = props;
  const { isLoading, isFetching, data, error } = useGetProductsQuery(null);
  const productData = data?.find((product) => product.sku === id);

  if (isLoading || isFetching) {
    return (
      <div className="cubeSpinnerContainer">
        <CubeSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="renderProduct">Error</div>;
  }

  if (productData) {
    return (
      <div className="renderProduct">
        <BreadCrumbs productData={productData} />
        <div className="renderProduct__section">
          <Gallery productData={productData} />
          <ProductDescription productData={productData} />
        </div>
      </div>
    );
  }
}

export default RenderProduct;
