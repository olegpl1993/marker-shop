"use client";
import "./Settings.scss";
import SortSelector from "../SortSelector/SortSelector";
import Search from "../Search/Search";
import PageQtySelector from "../ProductsOnPageSelector/PageQtySelector";
import { Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function Settings() {
  return (
    <div className="settings">
      <Search />

      <Button
        variant="contained"
        className="settings__filterButton"
        size="large"
        onClick={() => {
          console.log("фильтры");
        }}
      >
        <FilterAltIcon className="settings__filterIcon" />
        фильтры
      </Button>

      <div className="settings__selectorBox">
        <PageQtySelector />
        <SortSelector />
      </div>
    </div>
  );
}

export default Settings;
