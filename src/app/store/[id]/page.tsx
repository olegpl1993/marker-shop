import "./product.scss";

interface Props {
  params: {
    id: string;
  };
}
async function Product(props: Props) {
  const { id } = props.params;
  return <div className="product">Products sku: {id}</div>;
}

export default Product;
