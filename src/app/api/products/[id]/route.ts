import { NextResponse } from "next/server";
import ApiService from "../../apiService";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(req: Request, props: Props) {
  try {
    const { id } = props.params;
    const product = await ApiService.getOneProduct(id);
    if (product) {
      return NextResponse.json(product);
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
