"use client";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="filters">
        <div className="filters__title">Категории</div>
        <div className="filters__items">Пледы</div>
        <div className="filters__items">Ковры</div>
        <div className="filters__items">Подушки</div>
        <div className="filters__items">Колготки</div>
        <div className="filters__items">Куртки</div>
        <div className="filters__items">Шорты</div>
      </div>
    </aside>
  );
}

export default Sidebar;
