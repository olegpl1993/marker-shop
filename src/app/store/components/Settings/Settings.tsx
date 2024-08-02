"use client";
import Modal from "@/shared/components/Modal/Modal";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Categories from "../RenderStore/Sidebar/Categories/Categories";
import PriceFilter from "../RenderStore/Sidebar/PriceFilter/PriceFilter";
import ChipsArray from "./ChipsArray/ChipsArray";
import ProductsQtySelector from "./ProductsQtySelector/ProductsQtySelector";
import Search from "./Search/Search";
import "./Settings.scss";
import SortSelector from "./SortSelector/SortSelector";

function Settings() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="settings">
      <div className="settings__row">
        {typeof windowWidth === "number" && windowWidth > 1023 && <Search />}
        <Button
          variant="contained"
          className="settings__filterButton"
          size="large"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <FilterAltIcon className="settings__filterIcon" />
          фильтр
        </Button>
        <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
          <div className="settings__modal">
            <Search />
            <div className="settings__filtersCol">
              <Categories />
              <PriceFilter />
            </div>
          </div>
        </Modal>
        <div className="settings__selectorBox">
          <ProductsQtySelector />
          <SortSelector />
        </div>
      </div>

      <ChipsArray />
    </div>
  );
}

export default Settings;
