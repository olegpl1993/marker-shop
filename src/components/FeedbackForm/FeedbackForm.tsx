"use client";
import "./FeedbackForm.scss";
import { Button, Paper, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

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
  const submitForm: SubmitHandler<FormFeedback> = (form: FormFeedback) => {
    console.log(form);
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
          error={!!errors.name}
          {...(register("name"),
          {
            minLength: { value: 8, message: "Минимум 8 символов" },
            maxLength: { value: 20, message: "Максимум 20 символов" },
          })}
        />

        <TextField
          label="E-mail для связи"
          variant="outlined"
          className="feedbackForm__input"
          type="email"
          error={!!errors.email}
          {...register("email", {
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
          {...register("message")}
        />

        <Button
          type="submit"
          variant="contained"
          className="feedbackForm__button"
          size="large"
        >
          ОТПРАВИТЬ
        </Button>
      </form>
    </Paper>
  );
}

export default FeedbackForm;
