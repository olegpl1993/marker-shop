import Logo from "../Logo/Logo";
import "./Header.scss";
import Link from "next/link";

function Header() {
  return (
    <header>
      <Logo />
      <div className="menu">
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
      <div>Корзина</div>
    </header>
  );
}

export default Header;
