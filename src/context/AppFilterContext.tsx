import { useReducer } from "react";
import {
  filtersReducer,
  initialStateFilters,
  FiltersContext,
} from "../hooks/useFilters";

type Props = {
  children: React.ReactNode;
};

export const AppFilterContext: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialStateFilters);

  return (
    <FiltersContext.Provider value={{ state, dispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};
