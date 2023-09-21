"use client";
import "./store.scss";
import RenderStore from "@/components/RenderStore/RenderStore";
import Settings from "@/components/Settings/Settings";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { initializeSelectedSearch } from "@/redux/slices/searchSlice";
import { initializeSelectedCategories } from "@/redux/slices/selectedCategoriesSlice";

function Store() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeSelectedSearch());
    dispatch(initializeSelectedCategories());
  }, []);

  return (
    <div className="store">
      <Settings />
      <RenderStore />
    </div>
  );
}

export default Store;
