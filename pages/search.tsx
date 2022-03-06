import { AvailableFilters } from "../src/components/AvailableFilters";
import { DisplayFilters } from "../src/components/DisplayFiilters";
import { AppBody } from "../src/components/layout/AppBody";
import ProductsCatalog from "../src/components/ProductCatalog";
import { ProductCatalogPagination } from "../src/components/ProductCatalogPagination";

const Search: React.FC = () => {
  return (
    <AppBody>
      <AvailableFilters />
      <DisplayFilters />
      <ProductsCatalog />
      <ProductCatalogPagination />
    </AppBody>
  );
};

export default Search;
