"use client";
import "./FeedbackForm.scss";
import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Ellipsis from "../Ellipsis/Ellipsis";

interface FormFeedback {
  name: string;
  email: string;
  message: string;
}

function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFeedback>();

  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabledBTN, setIsDisabledBTN] = useState(false);

  const submitForm: SubmitHandler<FormFeedback> = async (
    form: FormFeedback
  ) => {
    setIsDisabledBTN(true);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(form),
    });
    if (response.status === 200) {
      setIsSending(true);
      setIsError(false);
      reset();
    } else {
      setIsError(true);
      setIsSending(false);
    }
    setTimeout(() => {
      setIsSending(false);
      setIsError(false);
    }, 3000);
    setIsDisabledBTN(false);
  };

  return (
    <Paper elevation={3} className="feedbackForm">
      <div className="feedbackForm__title">Форма связи</div>
      <form
        className="feedbackForm__form"
        action="submit"
        onSubmit={handleSubmit(submitForm)}
      >
        <TextField
          label="Ваше имя"
          variant="outlined"
          className="feedbackForm__input"
          type="text"
          helperText={
            errors.name && "Имя должно содержать от 3 до 255 символов"
          }
          error={!!errors.name}
          {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 255,
          })}
        />

        <TextField
          label="E-mail для связи"
          variant="outlined"
          className="feedbackForm__input"
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

        <TextField
          className="feedbackForm__textarea"
          label="Ваше сообщение"
          multiline
          rows={4}
          helperText={
            errors.message && "Сообщение должно содержать от 1 до 999 символов"
          }
          error={!!errors.message}
          {...register("message", {
            required: true,
            minLength: 1,
            maxLength: 999,
          })}
        />

        <div className="feedbackForm__row">
          <Button
            type="submit"
            variant="contained"
            className="feedbackForm__button"
            size="large"
            disabled={isDisabledBTN}
          >
            ОТПРАВИТЬ
          </Button>
          {isSending && (
            <p className="feedbackForm__successText">Письмо отправлено</p>
          )}
          {isError && (
            <p className="feedbackForm__errorText">Ошибка отправки</p>
          )}
          {isDisabledBTN && <Ellipsis />}
        </div>
      </form>
    </Paper>
  );
}

export default FeedbackForm;
