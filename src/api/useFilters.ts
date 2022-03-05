import React, { Reducer, useReducer } from "react";

type Filters = {
  search?: string;
  priceFrom?: number;
  priceTo?: number;
};

export const initialStateFilters: Filters = {
  search: "woda",
  priceFrom: null,
  priceTo: null,
};

type FilterActions =
  | {
      type: "RESET_FILTERS";
    }
  | {
      type: "SET_FILTERS";
      payload: Filters;
    }
  | {
      type: "SET_SEARCH";
      payload: string;
    };

export const filtersReducer = (state: Filters, action: FilterActions) => {
  switch (action.type) {
    case "RESET_FILTERS":
      return initialStateFilters;
    case "SET_SEARCH":
      return {
        ...initialStateFilters,
        search: action.payload,
      };
    case "SET_FILTERS":
      return action.payload;
    default:
      return state;
  }
};

export const FiltersContext = React.createContext<{
  state?: Filters;
  dispatch: React.Dispatch<FilterActions>;
}>({
  state: null,
  dispatch: null,
});
