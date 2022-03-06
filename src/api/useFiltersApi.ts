import { FILTERS_API_URL } from "./apiurls";
import { stringify } from "query-string";
import { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { FiltersContext } from "../hooks/useFilters";
import { FiltersDataDto, FiltersDto } from "./dtoTypes";

const makeRequestToFiltersApi = async (
  queryString
): Promise<FiltersDataDto> => {
  return await (
    await axios.get<FiltersDataDto>(`${FILTERS_API_URL}?${queryString}`)
  ).data;
  // return await axios.get(`${FILTERS_API_URL}`);
};

const useFiltersApi = (): {
  data: FiltersDto;
  isLoading: boolean;
} => {
  const { state: filtersState } = useContext(FiltersContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<FiltersDto>(null);

  useEffect(() => {
    (async () => {
      const queryString = stringify(filtersState, { skipNull: true });
      setIsLoading(true);
      const response = await makeRequestToFiltersApi(queryString);
      setData(response.data);

      setIsLoading(false);
    })();
  }, [filtersState]);

  return {
    isLoading,
    data,
  };
};
export default useFiltersApi;
