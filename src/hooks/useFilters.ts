import React from "react";

export type FiltersState = {
  search?: string;
  priceFrom?: number;
  priceTo?: number;
  statuses: string[];
  page: number;
  pageSize: number;
};

export const initialStateFilters: FiltersState = {
  search: "woda",
  priceFrom: null,
  priceTo: null,
  statuses: [],
  page: 1,
  pageSize: 24,
};

type FilterActions =
  | {
      type: "RESET_FILTERS";
    }
  | {
      type: "SET_FILTERS";
      payload: FiltersState;
    }
  | {
      type: "SET_SEARCH";
      payload: string;
    }
  | {
      type: "ADD_STATUS";
      payload: string;
    }
  | {
      type: "REMOVE_STATUS";
      payload: string;
    }
  | {
      type: "SET_PAGE";
      payload: number;
    };

export const filtersReducer = (
  state: FiltersState,
  action: FilterActions
): FiltersState => {
  switch (action.type) {
    case "RESET_FILTERS":
      return initialStateFilters;
    case "SET_SEARCH":
      return {
        ...initialStateFilters,
        search: action.payload,
      };
    case "SET_FILTERS":
      return { ...initialStateFilters, ...action.payload };
    case "ADD_STATUS":
      return { ...state, statuses: [...state.statuses, action.payload] };
    case "REMOVE_STATUS":
      return {
        ...state,
        statuses: state.statuses.filter((id) => id !== action.payload),
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export const FiltersContext = React.createContext<{
  state?: FiltersState;
  dispatch: React.Dispatch<FilterActions>;
}>({
  state: null,
  dispatch: null,
});
