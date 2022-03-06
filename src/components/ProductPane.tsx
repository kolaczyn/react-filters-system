type Props = {
  product: {
    oldPrice: number;
    price: number;
    id: number;
    brand: string;
    caption: string;
  };
};

export const ProductPane: React.FC<Props> = ({ product }) => {
  const { oldPrice, price, id, brand, caption } = product;
  return (
    <h2>
      {brand} {caption}
      {price}
    </h2>
  );
};
