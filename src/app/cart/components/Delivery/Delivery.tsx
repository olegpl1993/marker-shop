import "./Delivery.scss";
import PaidIcon from "@mui/icons-material/Paid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

function Delivery() {
  return (
    <div className="delivery">
      <div className="delivery__payment">
        <PaidIcon className="delivery__logo" />
        <div className="delivery__row">
          <span className="delivery__title">Оплата.</span>
          <span className="delivery__text">
            Заказ оплачивается непосредственно в отделении Новой Почты. При
            получении товара вы имеете возможность лично убедиться в его
            качестве и целостности, что исключает возможные неприятные сюрпризы.
            Оплата осуществляется только в момент получения товара, обеспечивая
            вашу безопасность и уверенность в успешной сделке.
          </span>
        </div>
      </div>

      <div className="delivery__delivery">
        <LocalShippingIcon className="delivery__logo" />
        <div className="delivery__row">
          <span className="delivery__title">Доставка.</span>
          <span className="delivery__text">
            Отправка заказов осуществляется в день заказа при оформлении до
            16:30 (Сб до 14:30, Вс – выходной). При возникновении обстоятельств
            непреодолимой силы обработка заказов может занять более длительное
            время. Самовывоз из отделений новой почты.
          </span>
        </div>
      </div>

      <div className="delivery__guarantee">
        <WorkspacePremiumIcon className="delivery__logo" />
        <div className="delivery__row">
          <span className="delivery__title">Гарантия.</span>
          <span className="delivery__text">
            Официальная гарантии предоставлятся производителем. Согласно закону
            Украины «О защите прав потребителей», товары подлежат возврату или
            обмену в течение 14 дней с момента покупки. Важно! Товар надлежащего
            качества подлежит возврату (обмену) только в том случае, если он не
            был в употреблении, сохранил свой первоначальный внешний вид и
            герметичность упаковки.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
