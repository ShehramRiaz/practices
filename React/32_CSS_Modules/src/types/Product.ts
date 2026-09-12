type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type ProductsListProps = { products: Product[] };

export type { Product, ProductsListProps };
