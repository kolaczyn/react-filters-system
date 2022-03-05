import { useReducer } from "react";
import {
  FiltersContext,
  filtersReducer,
  initialStateFilters,
} from "../src/api/useFilters";
import { AvailableFilters } from "../src/components/AvailableFilters";
import { DisplayFilters } from "../src/components/DisplayFiilters";
import ProductsCatalog from "../src/components/ProductCatalog";
import SearchInput from "../src/components/SearchInput";

export default function Home() {
  const [state, dispatch] = useReducer(filtersReducer, initialStateFilters);

  return (
    <FiltersContext.Provider value={{ state, dispatch }}>
      <SearchInput />
      <AvailableFilters />
      <DisplayFilters />
      <ProductsCatalog />
    </FiltersContext.Provider>
  );
}
