export type FiltersDto = {
  id: string;
  type: string;
  name: string;
}[];

export type FiltersDataDto = {
  data: FiltersDto;
};

export type ProductsDto = {
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
