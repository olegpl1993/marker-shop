import Link from "next/link";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="menu">
        <Link href={"/"} className="menu__link">
          Главная
        </Link>
        <Link href={"/store"} className="menu__link">
          Магазин
        </Link>
        <Link href={"/contacts"} className="menu__link">
          Контакты
        </Link>
        <Link href={"/about"} className="menu__link">
          О нас
        </Link>
      </div>
    </header>
  );
}

export default Header;
