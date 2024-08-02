"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a className="footer__link" href="https://www.instagram.com/">
          <InstagramIcon className="footer__icon" />
        </a>
        <a className="footer__link" href="https://www.facebook.com/">
          <FacebookIcon className="footer__icon" />
        </a>
        <a className="footer__link" href="https://t.me/">
          <TelegramIcon className="footer__icon" />
        </a>
      </div>

      <p className="footer__info">© 2023 MARKER-SHOP</p>
    </footer>
  );
}

export default Footer;
