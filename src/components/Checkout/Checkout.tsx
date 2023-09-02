"use client";
import "./Checkout.scss";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CartProduct } from "@/types";
import Ellipsis from "../Ellipsis/Ellipsis";
import PostOfficeSelect from "../PostOfficeSelect/PostOfficeSelect";
import { useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/slices/cartSlice";

interface FormCheckout {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
}

interface Props {
  cartProducts: CartProduct[];
  summary: number;
}

function Checkout(props: Props) {
  const { cartProducts, summary } = props;
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormCheckout>();

  const [city, setCity] = useState(null);
  const [postOffice, setPostOffice] = useState("");
  const [isDisabledBTN, setIsDisabledBTN] = useState(false);

  useEffect(() => {
    if (postOffice) {
      setIsDisabledBTN(false);
    } else {
      setIsDisabledBTN(true);
    }
  }, [postOffice]);

  console.log(city);
  console.log(postOffice);
  console.log(cartProducts);

  const submitForm: SubmitHandler<FormCheckout> = async (
    form: FormCheckout
  ) => {
    const fullForm = {
      name: form.name,
      surname: form.surname,
      phone: form.phone,
      email: form.email,
      message: form.message,
      city,
      postOffice,
      cartProducts,
      summary,
    };
    console.log(fullForm);
    reset();
    dispatch(clearCart());
    setCity(null);
    setPostOffice("");
  };

  return (
    <div className="checkout">
      <div className="checkout__title">Получатель заказа</div>
      <form
        className="checkout__form"
        action="submit"
        onSubmit={handleSubmit(submitForm)}
      >
        <TextField
          label="Имя"
          variant="outlined"
          className="checkout__input"
          type="text"
          helperText={errors.name && "Имя должно содержать от 1 до 50 символов"}
          error={!!errors.name}
          {...register("name", {
            required: true,
            minLength: 1,
            maxLength: 50,
          })}
        />

        <TextField
          label="Фамилия"
          variant="outlined"
          className="checkout__input"
          type="text"
          helperText={
            errors.surname && "Фамилия должна содержать от 1 до 50 символов"
          }
          error={!!errors.surname}
          {...register("surname", {
            required: true,
            minLength: 1,
            maxLength: 50,
          })}
        />

        <TextField
          label="Телефон"
          variant="outlined"
          className="checkout__input"
          type="phone"
          helperText={
            errors.phone && "Телефон должен содержать от 6 до 20 символов"
          }
          error={!!errors.phone}
          {...register("phone", {
            required: true,
            minLength: 6,
            maxLength: 50,
          })}
        />

        <TextField
          label="E-mail"
          variant="outlined"
          className="checkout__input"
          type="email"
          helperText={errors.email && errors.email.message}
          error={!!errors.email}
          {...register("email", {
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Введите корректный email",
            },
          })}
        />

        <div className="checkout__title">Доставка</div>

        <PostOfficeSelect
          city={city}
          setCity={setCity}
          postOffice={postOffice}
          setPostOffice={setPostOffice}
        />

        <div className="checkout__title">Ваш заказ</div>

        <div className="checkout__list">
          {cartProducts.map((cartProduct) => (
            <div key={cartProduct.product.sku} className="checkout__item">
              {cartProduct.product.name} - {cartProduct.qty}шт
            </div>
          ))}
        </div>
        <div className="checkout__total">Сумма: {summary}₴</div>

        <TextField
          className="checkout__textarea"
          label="Комментарий к заказу"
          multiline
          rows={4}
          helperText={
            errors.message && "Сообщение должно содержать от 1 до 999 символов"
          }
          error={!!errors.message}
          {...register("message", {
            required: false,
            minLength: 1,
            maxLength: 999,
          })}
        />

        <div className="checkout__row">
          <Button
            type="submit"
            variant="contained"
            className="checkout__button"
            size="large"
            disabled={isDisabledBTN}
          >
            ЗАКАЗ ПОДТВЕРЖДАЮ
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
