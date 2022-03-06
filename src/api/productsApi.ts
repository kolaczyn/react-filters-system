import axios from "axios";

const URL_PRODUCTS_API = "https://v5stg.rossmann.pl/products/v3/api/Products";

type ProductsDto = {
  oldPrice: number;
  price: number;
  id: number;
  brand: string;
  caption: string;
};

export type ProductApiDto = {
  data: {
    products: ProductsDto[];
    totalCount: number;
    totalPages: number;
  };
};

export const makeRequestToProductApi = async (
  queryString: string
): Promise<ProductApiDto> => {
  const response = await axios.get<ProductApiDto>(
    `${URL_PRODUCTS_API}?${queryString}`
  );
  return response.data;
};
