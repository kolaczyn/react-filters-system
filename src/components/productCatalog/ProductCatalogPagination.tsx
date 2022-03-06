import { useProductsApi } from "../api/useProductsApi";
import { Pagination } from "./Pagination";

export const ProductCatalogPagination: React.FC = () => {
  const { data, isLoading } = useProductsApi();

  return (
    !isLoading && <Pagination currentPage={1} maxPage={data.data.totalPages} />
  );
};
