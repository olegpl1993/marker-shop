import { NextResponse } from "next/server";
require("dotenv").config();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: process.env.NOVAKEY,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityName: body,
          Language: "RU",
        },
      }),
    });
    const data = await response.json();
    const postOfficesArray = data.data.map((postOffice: any) =>
      postOffice.DescriptionRu
        ? postOffice.DescriptionRu
        : postOffice.Description
    );

    return NextResponse.json({ postOfficesArray }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
