"use client";
import Categories from "./Categories/Categories";
import PriceFilter from "./PriceFilter/PriceFilter";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Categories />
      <PriceFilter />
    </aside>
  );
}

export default Sidebar;
