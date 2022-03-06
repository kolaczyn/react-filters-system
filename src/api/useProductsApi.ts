import { FiltersState } from "./../hooks/useFilters";
import { useRouter } from "next/router";
import axios from "axios";
import { stringify } from "query-string";
import { FiltersContext } from "../hooks/useFilters";
import { useContext, useEffect, useState } from "react";

const URL_PRODUCTS_API = "https://v5stg.rossmann.pl/products/v3/api/Products";

type ProductsDto = {
  oldPrice: number;
  price: number;
  id: number;
  brand: string;
  caption: string;
};

export type ProductApiDto = {
  data: {
    products: ProductsDto[];
    totalCount: number;
    totalPages: number;
  };
};

export const makeRequestToProductApi = async (
  queryString: string
): Promise<ProductApiDto> => {
  const response = await axios.get<ProductApiDto>(
    `${URL_PRODUCTS_API}?${queryString}`
  );
  return response.data;
};

export const useProductsApi = () => {
  const router = useRouter();
  const { dispatch } = useContext(FiltersContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ProductApiDto>(null);
  const { state: filtersState } = useContext(FiltersContext);

  useEffect(() => {
    const newFiltersState = router.query as unknown as FiltersState;
    console.log(newFiltersState);
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
