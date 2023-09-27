"use client";
import "./RenderStore.scss";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import CubeSpinner from "../CubeSpinner/CubeSpinner";

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
