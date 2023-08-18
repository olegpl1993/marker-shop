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
      subject: "MARKER-SHOP message from client",
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    };
    transporter.sendMail(mailOptions);
    return NextResponse.json({ body }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
