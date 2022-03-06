import { AvailableStatuses } from "../src/components/productCatalog/AvailableFilters";
import { SelectedFilters as SelectedFilters } from "../src/components/productCatalog/SelectedFilters";
import { AppBody } from "../src/components/layout/AppBody";
import ProductsCatalog from "../src/components/productCatalog/ProductCatalog";
import { ProductCatalogPagination } from "../src/components/productCatalog/ProductCatalogPagination";
import { SearchPageHead } from "../src/components/productCatalog/SearchPageHead";

const Search: React.FC = () => {
  return (
    <AppBody>
      <SearchPageHead />
      <AvailableStatuses />
      <SelectedFilters />
      <ProductsCatalog />
      <ProductCatalogPagination />
    </AppBody>
  );
};

export default Search;
