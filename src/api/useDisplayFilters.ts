import { FiltersContext } from "./useFilters";
import { useContext } from "react";

type DisplayFilterData = {
  text: string;
  onClose: () => any;
};

export const useDisplayFilters = (): DisplayFilterData[] => {
  const { state, dispatch } = useContext(FiltersContext);

  const handleCloseSearch = () => {
    dispatch({ type: "SET_SEARCH", payload: "" });
  };

  return [{ text: state.search, onClose: handleCloseSearch }];
};
