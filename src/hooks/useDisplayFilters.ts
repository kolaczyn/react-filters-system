import { FiltersContext } from "./useFilters";
import { useContext } from "react";
import useFiltersApi from "../api/useFiltersApi";

type DisplayFilterData = {
  text: string;
  onClose: () => any;
};

export const useDisplayFilters = (): DisplayFilterData[] => {
  const { state, dispatch } = useContext(FiltersContext);
  const { isLoading, data } = useFiltersApi();

  const getFilterName = (filterId): string | null =>
    isLoading ? null : data.find((f) => f.id === filterId)?.name;

  const handleCloseSearch = () => {
    dispatch({ type: "SET_SEARCH", payload: "" });
  };

  const searchDisplayFilter = {
    text: state.search,
    onClose: handleCloseSearch,
  };
  const statusesDisplayFilters: DisplayFilterData[] = isLoading
    ? []
    : state.statuses.map((statusId) => ({
        text: getFilterName(statusId),
        onClose: () => dispatch({ type: "REMOVE_STATUS", payload: statusId }),
      }));

  return [searchDisplayFilter, ...statusesDisplayFilters].filter(
    (d) => d.text !== ""
  );
};
