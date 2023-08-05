import "./product.scss";
import ApiService from "@/app/api/apiService";

interface Props {
  params: {
    id: string;
  };
}

async function Product(props: Props) {
  const { id } = props.params;
  const product = await ApiService.getOneProduct(id);
  if (product) {
    return (
      <div className="product">
        <div className="product__imgBox">
          <img
            className="product__img"
            src={product.gallery[0]}
            alt={product.name}
            loading="lazy"
          />
        </div>
        <div className="product__descriptionBox">
          <div>Products sku: {id}</div>
          <div>Имя: {product?.name}</div>
          <div>Цена: {product?.price}</div>
          <div>Описание: {product?.description}</div>
        </div>
      </div>
    );
  }
}

export default Product;
