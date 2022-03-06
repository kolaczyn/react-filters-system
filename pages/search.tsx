import { AvailableFilters } from "../src/components/productCatalog/AvailableFilters";
import { DisplayFilters } from "../src/components/productCatalog/DisplayFiilters";
import { AppBody } from "../src/components/layout/AppBody";
import ProductsCatalog from "../src/components/productCatalog/ProductCatalog";
import { ProductCatalogPagination } from "../src/components/productCatalog/ProductCatalogPagination";

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
