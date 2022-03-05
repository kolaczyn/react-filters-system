import { useProductsApi } from "../api/useProductsApi";

const ProductsCatalog: React.FC = () => {
  const { data, isLoading } = useProductsApi();
  return isLoading ? (
    <h2>loading...</h2>
  ) : (
    <>
      {data.data.products.map((p) => (
        <h2 key={p.id}>
          {p.brand} {p.caption}
        </h2>
      ))}
    </>
  );
};
export default ProductsCatalog;
