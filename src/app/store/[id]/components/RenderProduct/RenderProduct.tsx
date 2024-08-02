"use client";
import BreadCrumbs from "@/app/store/[id]/components/RenderProduct/BreadCrumbs/BreadCrumbs";
import Gallery from "@/app/store/[id]/components/RenderProduct/Gallery/Gallery";
import ProductDescription from "@/app/store/[id]/components/RenderProduct/ProductDescription/ProductDescription";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import CubeSpinner from "@/shared/components/CubeSpinner/CubeSpinner";
import "./RenderProduct.scss";

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
