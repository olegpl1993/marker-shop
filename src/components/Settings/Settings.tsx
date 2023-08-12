"use client";
import "./Settings.scss";
import SortSelector from "../SortSelector/SortSelector";
import Search from "../Search/Search";
import PageQtySelector from "../ProductsOnPageSelector/PageQtySelector";
import { Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import Modal from "../Modal/Modal";

function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="settings">
      <Search />

      <Button
        variant="contained"
        className="settings__filterButton"
        size="large"
        onClick={() => {
          console.log("фильтры");
          setIsOpen(true);
        }}
      >
        <FilterAltIcon className="settings__filterIcon" />
        фильтры
      </Button>

      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(false)}>
        <div>Hello world</div>
      </Modal>

      <div className="settings__selectorBox">
        <PageQtySelector />
        <SortSelector />
      </div>
    </div>
  );
}

export default Settings;
