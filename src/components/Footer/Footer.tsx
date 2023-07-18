import Link from "next/link";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
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
    </footer>
  );
}

export default Footer;
