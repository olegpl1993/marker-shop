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
        calledMethod: "getCities",
        methodProperties: {
          FindByString: body,
          Limit: "4",
        },
      }),
    });
    const data = await response.json();
    const citiesArray = data.data.map((city: any) =>
      city.DescriptionRu ? city.DescriptionRu : city.Description
    );

    return NextResponse.json({ citiesArray }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
