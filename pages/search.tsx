import { AvailableFilters } from "../src/components/AvailableFilters";
import { DisplayFilters } from "../src/components/DisplayFiilters";
import { AppBody } from "../src/components/layout/AppBody";
import ProductsCatalog from "../src/components/ProductCatalog";

const Search: React.FC = () => {
  return (
    <AppBody>
      <AvailableFilters />
      <DisplayFilters />
      <ProductsCatalog />
    </AppBody>
  );
};

export default Search;
