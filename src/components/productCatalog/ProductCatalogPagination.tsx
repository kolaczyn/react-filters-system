import { stringify } from "query-string";
import { useContext } from "react";
import { useProductsApi } from "../../api/useProductsApi";
import { FiltersContext } from "../../hooks/useFilters";
import { Pagination } from "../common/Pagination";

export const ProductCatalogPagination: React.FC = () => {
  const { data, isLoading } = useProductsApi();
  const { state: filtersState, dispatch } = useContext(FiltersContext);
  const { page } = filtersState;

  const nthPageHref = (n) =>
    `/search?${stringify({ ...filtersState, page: n }, { skipNull: true })}`;

  return (
    !isLoading && (
      <Pagination
        currentPage={page}
        maxPage={data.data.totalPages}
        nthPageHref={nthPageHref}
      />
    )
  );
};
