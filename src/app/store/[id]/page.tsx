import "./product.scss";
import ApiService from "@/app/api/apiService";
import RenderProduct from "@/components/RenderProduct/RenderProduct";
import { Product } from "@/types";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata(props: Props) {
  const { id } = props.params;
  // const product = await ApiService.getOneProduct(id);

  const url = "https://msdrop.com.ua/export/4Oyz/json";
  const response = await fetch(url);
  const data: Product[] = await response.json();
  const product = data?.find((product) => product.sku === id);

  if (product) {
    return {
      title: product.name,
      keywords: product.description,
      description: product.description,
      openGraph: {
        title: product.name,
        images: product.gallery[0],
        description: product.description,
      },
    };
  }
}

async function Product(props: Props) {
  const { id } = props.params;
  return (
    <div className="product">
      <RenderProduct id={id} />
    </div>
  );
}

export default Product;
