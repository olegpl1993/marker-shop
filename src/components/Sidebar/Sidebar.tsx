"use client";
import "./Sidebar.scss";
import Categories from "../Categories/Categories";
import PriceFilter from "../PriceFilter/PriceFilter";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Categories />
      <PriceFilter />
    </aside>
  );
}

export default Sidebar;
