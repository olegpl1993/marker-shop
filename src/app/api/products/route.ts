import { NextResponse } from "next/server";
import ApiService from "../apiService";

export async function GET() {
  try {
    const data = ApiService.getData();
    if (data) {
      return NextResponse.json(data);
    } else {
      await ApiService.fetchData();
      const updatedData = ApiService.getData();
      return NextResponse.json(updatedData);
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
