import { stringify } from "query-string";
import { FiltersContext } from "./useFilters";
import { useContext, useEffect, useState } from "react";
import { makeRequestToProductApi, ProductApiDto } from "./productsApi";

export const useProductsApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ProductApiDto>(null);
  const { state: filtersState } = useContext(FiltersContext);
  console.log(filtersState);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const queryString = stringify(filtersState);
      console.log({ queryString, filtersState });
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
