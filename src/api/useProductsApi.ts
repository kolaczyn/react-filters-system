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
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ProductApiDto>(null);
  const { state: filtersState } = useContext(FiltersContext);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const queryString = stringify(filtersState);
      const response = await makeRequestToProductApi(queryString);
      setData(response);
      setIsLoading(false);
    })();
  }, [filtersState]);

  return {
    isLoading,
    data,
  };
};
