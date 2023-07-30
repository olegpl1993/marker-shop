"use client";
import "./Settings.scss";
import StorePagination from "../StorePagination/StorePagination";
import SortSelector from "../SortSelector/SortSelector";
import Search from "../Search/Search";
import PageQtySelector from "../ProductsOnPageSelector/ProductsOnPageSelector";

function Settings() {
  return (
    <div className="settings">
      <Search />
      <StorePagination />
      <div className="settings__selectorBox">
        <PageQtySelector />
        <SortSelector />
      </div>
    </div>
  );
}

export default Settings;
