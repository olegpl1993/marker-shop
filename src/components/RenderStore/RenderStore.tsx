"use client";
import "./RenderStore.scss";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import Spinner from "../Spinner/Spinner";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

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
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default RenderStore;
