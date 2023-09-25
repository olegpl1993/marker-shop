"use client";
import Gallery from "@/components/Gallery/Gallery";
import "./product.scss";
import Spinner from "@/components/Spinner/Spinner";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import ProductDescription from "@/components/ProductDescription/ProductDescription";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

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
        <ul className="product__breadCrumbs">
          <li className="product__breadCrumbsItem">
            <Link href={"/"} className="product__breadCrumbsLink">
              <HomeIcon fontSize="small" />
            </Link>
            <span className="product__breadCrumbsSeparator">/</span>
          </li>

          <li className="product__breadCrumbsItem">
            <Link href={"/store"} className="product__breadCrumbsLink">
              Магазин
            </Link>
            <span className="product__breadCrumbsSeparator">/</span>
          </li>

          <li className="product__breadCrumbsItem">
            <Link
              href={`/store?categories=%5B"${productData.category}"%5D&currentPage=1`}
              className="product__breadCrumbsLink"
            >
              {productData.category}
            </Link>
          </li>
        </ul>
        <div className="product__section">
          <Gallery productData={productData} />
          <ProductDescription productData={productData} />
        </div>
      </div>
    );
  }
}

export default Product;
