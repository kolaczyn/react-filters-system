import Head from "next/head";
import { useContext } from "react";
import { FiltersContext } from "../../hooks/useFilters";

export const SearchPageHead: React.FC = () => {
  const { state: filtersState } = useContext(FiltersContext);

  const title = [null, ""].includes(filtersState.search)
    ? "Search"
    : `${filtersState.search} | Search`;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
