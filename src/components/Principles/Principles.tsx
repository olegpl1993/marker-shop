"use client";
import "./Principles.scss";
import Divider from "@mui/material/Divider";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Principles() {
  return (
    <div className="principles">
      <div className="principles__block">
        <AccessAlarmIcon className="principles__backgroundImage" />
        <div className="principles__title">Оперативность</div>
        <div className="principles__text">
          Мы отлично осознаем, что каждый клиент желает получить свой товар
          быстро и без лишних задержек. Именно поэтому мы прилагаем максимум
          усилий, чтобы отправить все посылки как можно быстрее. Ранее мы
          гарантировали отправку заказов в тот же день, когда они поступали к
          нам. Однако в свете текущей обстановки в стране, сроки доставки
          заказов могут составить несколько дней.
        </div>
      </div>

      <Divider className="principles__divider" />

      <div className="principles__block">
        <ThumbUpOffAltIcon className="principles__backgroundImage" />
        <div className="principles__title">Качество</div>
        <div className="principles__text">
          Наша главная цель - обеспечить людей необходимыми товарами, которые
          оправдают их ожидания в плане качества. Именно поэтому перед тем, как
          предложить вам наш товар, наши сотрудники проводят длительное
          тестирование, и только лучшие из них становятся доступными для вас.
        </div>
      </div>

      <Divider className="principles__divider" />

      <div className="principles__block">
        <StarBorderIcon className="principles__backgroundImage" />
        <div className="principles__title">Актуальность</div>
        <div className="principles__text">
          {`Если товар отмечен как "В наличии", это означает, что он доступен на
          складе и готов к приобретению. И самое важное, цены остаются
          актуальными. Даже если стоимость товара увеличилась, и менеджер не
          успел ее изменить, ваша цена останется такой же, как указано при
          оформлении заказа. Мы убеждены, что неполнота в изменении стоимости
          товара, если такая произойдет, является ошибкой нашей стороны, и вы не
          должны нести дополнительные расходы из-за этого.`}
        </div>
      </div>
    </div>
  );
}

export default Principles;
