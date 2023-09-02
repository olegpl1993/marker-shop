import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
require("dotenv").config();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let mailOptions = {
      from: "olegpl1993@gmail.com",
      to: "olegpl1993@gmail.com",
      subject: "MARKER-SHOP Заказ",
      text: `
      Номер заказа: ${body.checkoutNumber}
      Имя: ${body.name}
      Фамилия: ${body.surname}
      Телефон: ${body.phone}
      Email: ${body.email}
      Город: ${body.city}
      Отделение новой почты: ${body.postOffice}
      Коментарий к заказу: ${body.message}
      Заказ: ${body.sendProducts}
      Сумма: ${body.summary}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ body }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
