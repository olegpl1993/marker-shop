"use client";
import Settings from "@/app/store/components/Settings/Settings";
import { useAppDispatch } from "@/redux/hooks";
import { initializePriceFilter } from "@/redux/slices/priceFilterSlice";
import { initializeSelectedSearch } from "@/redux/slices/searchSlice";
import { initializeSelectedCategories } from "@/redux/slices/selectedCategoriesSlice";
import { initializeSort } from "@/redux/slices/sortSlice";
import { initializeStorePagination } from "@/redux/slices/storePaginationSlice";
import { useEffect } from "react";
import RenderStore from "./components/RenderStore/RenderStore";
import "./store.scss";

function Store() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeSelectedSearch());
    dispatch(initializeSelectedCategories());
    dispatch(initializeStorePagination());
    dispatch(initializeSort());
    dispatch(initializePriceFilter());
  }, []);

  return (
    <div className="store">
      <Settings />
      <RenderStore />
    </div>
  );
}

export default Store;
