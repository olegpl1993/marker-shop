import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import { Paper } from "@mui/material";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import "./RenderContacts.scss";

function RenderContacts() {
  return (
    <div className="renderContacts">
      <div className="renderContacts__wrapper">
        <Paper elevation={1} className="renderContacts__box">
          <div className="renderContacts__title">Контакты</div>

          <div className="renderContacts__info-container">
            <div className="renderContacts__info-row">
              <div className="renderContacts__info-title">
                <LocalPhoneIcon color="primary" /> <p>Телефон</p>
              </div>
              <p className="renderContacts__info">+380 (44) 123-45-67</p>
            </div>

            <div className="renderContacts__info-row">
              <div className="renderContacts__info-title">
                <EmailIcon color="primary" /> <p>Электронная почта</p>
              </div>
              <p className="renderContacts__info">marker-shop@info.com</p>
            </div>

            <div className="renderContacts__info-row">
              <div className="renderContacts__info-title">
                <CalendarMonthIcon color="primary" />
                <p>График работы</p>
              </div>
              <p className="renderContacts__info">
                Онлайн поддержка: понедельник - пятница с 9:00 до 17:30 суббота,
                воскресенье - выходной
              </p>
            </div>

            <div className="renderContacts__info-row">
              <div className="renderContacts__info-title">
                <PlaceIcon color="primary" /> <p>Адрес</p>
              </div>
              <p className="renderContacts__info">
                г. Киев, ул. Кирилловская, дом 96, офис 456
              </p>
            </div>

            <p className="renderContacts__info-title">
              Мы находимся в самом центре города Киева, всегда рады видеть вас!
            </p>
          </div>
        </Paper>
        <FeedbackForm />
      </div>

      <div className="renderContacts__map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795.3498719562854!2d30.483494770330793!3d50.47819221316214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cde0c5625e7b%3A0xbf28b2a805437a38!2z0JrQuNGA0LjQu9C70L7QstGB0LrQsNGPINGD0LsuLCA5Niwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1691963662265!5m2!1sru!2sua"
          loading="lazy"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default RenderContacts;
