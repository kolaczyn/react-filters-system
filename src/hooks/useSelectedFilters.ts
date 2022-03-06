import { useContext } from "react";
import { FiltersContext } from "./useFilters";
import useFiltersApi from "../api/useFiltersApi";

type SelectedFilter = {
  text: string;
  onClose: () => any;
};

export const useSelectedFilters = (): SelectedFilter[] => {
  const { state, dispatch } = useContext(FiltersContext);
  const { isLoading, data } = useFiltersApi();

  const getFilterName = (filterId): string | null =>
    isLoading ? null : data.find((f) => f.id === filterId)?.name;

  const handleCloseSearch = () => {
    dispatch({ type: "SET_SEARCH", payload: "" });
  };

  const searchFilter = {
    text: state.search,
    onClose: handleCloseSearch,
  };

  const statusFilters: SelectedFilter[] = isLoading
    ? []
    : state.statuses.map((statusId) => ({
        text: getFilterName(statusId),
        onClose: () => dispatch({ type: "REMOVE_STATUS", payload: statusId }),
      }));

  return [searchFilter, ...statusFilters].filter((d) => d.text !== "");
};
