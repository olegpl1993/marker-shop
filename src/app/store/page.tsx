import RenderStore from "@/components/RenderStore/RenderStore";
import "./store.scss";
import { Product } from "@/types";

async function getData() {
  const url = "https://msdrop.com.ua/export/4Oyz/json";
  const res = await fetch(url, { cache: "no-store" });
  return await res.json();
}

async function Store() {
  const data: Product[] = await getData();

  return (
    <div className="store">
      <RenderStore products={data} />
    </div>
  );
}

export default Store;
