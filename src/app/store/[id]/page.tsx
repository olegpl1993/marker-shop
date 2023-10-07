import "./product.scss";
import ApiService from "@/app/api/apiService";
import RenderProduct from "@/components/RenderProduct/RenderProduct";

interface Props {
  params: {
    id: string;
  };
}

// export async function generateMetadata(props: Props) {
//   const { id } = props.params;
//   const product = await ApiService.getOneProduct(id);
//   if (product) {
//     return {
//       title: product.name,
//       keywords: product.description,
//       description: product.description,
//       openGraph: {
//         title: product.name,
//         images: product.gallery[0],
//         description: product.description,
//       },
//     };
//   }
// }

async function Product(props: Props) {
  const { id } = props.params;
  return (
    <div className="product">
      <RenderProduct id={id} />
    </div>
  );
}

export default Product;
