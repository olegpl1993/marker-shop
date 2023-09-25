"use client";
import Gallery from "@/components/Gallery/Gallery";
import "./product.scss";
import Spinner from "@/components/Spinner/Spinner";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import ProductDescription from "@/components/ProductDescription/ProductDescription";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

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
