"use client";
import "./Settings.scss";
import SortSelector from "../SortSelector/SortSelector";
import Search from "../Search/Search";
import ProductsQtySelector from "../ProductsQtySelector/ProductsQtySelector";
import { Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Categories from "../Categories/Categories";
import PriceFilter from "../PriceFilter/PriceFilter";

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
      {typeof windowWidth === "number" && windowWidth > 1023 ? (
        <Search />
      ) : (
        <Button
          variant="contained"
          className="settings__filterButton"
          size="large"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <FilterAltIcon className="settings__filterIcon" />
          фильтры
        </Button>
      )}

      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
        <div className="settings__modal">
          <Search />
          <Categories />
          <PriceFilter />
        </div>
      </Modal>

      <div className="settings__selectorBox">
        <ProductsQtySelector />
        <SortSelector />
      </div>
    </div>
  );
}

export default Settings;
