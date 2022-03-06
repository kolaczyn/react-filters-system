import { FiltersState } from "./../hooks/useFilters";
import { useRouter } from "next/router";
import axios from "axios";
import { stringify } from "query-string";
import { FiltersContext } from "../hooks/useFilters";
import { useContext, useEffect, useState } from "react";
import { ProductApiDto } from "./dtoTypes";

const URL_PRODUCTS_API = "https://v5stg.rossmann.pl/products/v3/api/Products";

export const makeRequestToProductApi = async (
  queryString: string
): Promise<ProductApiDto> => {
  const response = await axios.get<ProductApiDto>(
    `${URL_PRODUCTS_API}?${queryString}`
  );
  return response.data;
};

const normalizeNumber = (num: string | string[]): number | null => {
  const parsed = Number(num);
  return Number.isNaN(parsed) ? null : parsed;
};

export const useProductsApi = () => {
  const router = useRouter();
  const { dispatch } = useContext(FiltersContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ProductApiDto>(null);
  const { state: filtersState } = useContext(FiltersContext);

  useEffect(() => {
    const { query } = router;
    const newFiltersState: FiltersState = {
      page: normalizeNumber(query.page),
      pageSize: normalizeNumber(query.pageSize),
      priceFrom: normalizeNumber(query.priceFrom),
      priceTo: normalizeNumber(query.priceTo),
      // TODO this is retarded, but should do for now
      search: query.search === undefined ? null : (query.search as string),
      statuses:
        query.statuses === undefined ? [] : (query.statuses as string[]),
    };

    dispatch({ type: "SET_FILTERS", payload: newFiltersState });
  }, [router.asPath]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const queryString = stringify(filtersState, { skipNull: true });
      const response = await makeRequestToProductApi(queryString);
      setData(response);
      setIsLoading(false);
    })();
  }, [stringify(filtersState)]);

  return {
    isLoading,
    data,
  };
};
