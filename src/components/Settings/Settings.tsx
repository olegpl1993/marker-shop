"use client";
import "./Settings.scss";
import StorePagination from "../StorePagination/StorePagination";
import SortSelector from "../SortSelector/SortSelector";
import Search from "../Search/Search";

function Settings() {
  return (
    <div className="settings">
      <Search />
      <StorePagination />
      <SortSelector />
    </div>
  );
}

export default Settings;
