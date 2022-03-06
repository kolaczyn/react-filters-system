import { useProductsApi } from "../../api/useProductsApi";
import { ProductPane } from "./ProductPane";

const ProductsCatalog: React.FC = () => {
  const { data, isLoading } = useProductsApi();
  return isLoading ? (
    <h2>loading...</h2>
  ) : (
    <>
      {data.data.products.map((product) => (
        <ProductPane key={product.id} product={product} />
      ))}
    </>
  );
};
export default ProductsCatalog;
