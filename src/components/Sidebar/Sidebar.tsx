"use client";
import "./Sidebar.scss";
import Categories from "../Categories/Categories";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Categories />
    </aside>
  );
}

export default Sidebar;
