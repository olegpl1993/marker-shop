import Link from "next/link";
import "./Menu.scss";

function Header() {
  return (
    <div className="menu">
      <Link href={"/store"} className="menu__link">
        Магазин
      </Link>
      <Link href={"/contacts"} className="menu__link">
        Контакты
      </Link>
    </div>
  );
}

export default Header;
