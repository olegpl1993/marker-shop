"use client";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import CubeSpinner from "@/shared/components/CubeSpinner/CubeSpinner";
import Content from "./Content/Content";
import "./RenderStore.scss";
import Sidebar from "./Sidebar/Sidebar";

function RenderStore() {
  const { isLoading, isFetching, data, error } = useGetProductsQuery(null);

  if (isLoading || isFetching) {
    return (
      <div className="cubeSpinnerContainer">
        <CubeSpinner />
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
