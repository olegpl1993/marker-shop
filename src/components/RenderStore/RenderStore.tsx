"use client";
import "./RenderStore.scss";
import StoreCard from "../StoreCard/StoreCard";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import Spinner from "../Spinner/Spinner";

function RenderStore() {
  const { isLoading, isFetching, data, error } = useGetProductsQuery(null);

  console.log(data);

  if (isLoading || isFetching) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    return (
      <div className="renderStore">
        {data.map((product) => (
          <StoreCard key={product.sku} product={product} />
        ))}
      </div>
    );
  }
}

export default RenderStore;
