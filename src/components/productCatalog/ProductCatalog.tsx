import { useProductsApi } from "../../api/useProductsApi";
import { Loading } from "../common/Loading";
import { ProductPane } from "./ProductPane";

const ProductsCatalog: React.FC = () => {
  const { data, isLoading } = useProductsApi();
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {data.data.products.map((product) => (
        <ProductPane key={product.id} product={product} />
      ))}
    </>
  );
};
export default ProductsCatalog;
