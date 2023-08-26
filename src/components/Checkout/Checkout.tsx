"use client";
import "./Checkout.scss";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Ellipsis from "../Ellipsis/Ellipsis";
import PostOfficeSelect from "../PostOfficeSelect/PostOfficeSelect";

interface FormCheckout {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
}

function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormCheckout>();

  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabledBTN, setIsDisabledBTN] = useState(false);

  const submitForm: SubmitHandler<FormCheckout> = async (
    form: FormCheckout
  ) => {
    console.log(form);
  };

  const [city, setCity] = useState("");
  const [postOffice, setPostOffice] = useState("");

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

        <PostOfficeSelect city={city} setCity={setCity} postOffice={postOffice} setPostOffice={setPostOffice} />

        <TextField
          className="checkout__textarea"
          label="Ваше сообщение"
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
          {isSending && (
            <p className="checkout__successText">Заказ в обработке</p>
          )}
          {isError && (
            <p className="checkout__errorText">Ошибка подтверждения заказа</p>
          )}
          {isDisabledBTN && <Ellipsis />}
        </div>
      </form>
    </div>
  );
}

export default Checkout;
