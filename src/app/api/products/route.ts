import { NextResponse } from "next/server";
import ApiService from "../apiService";

export async function GET() {
  try {
    const data = await ApiService.getData();
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
