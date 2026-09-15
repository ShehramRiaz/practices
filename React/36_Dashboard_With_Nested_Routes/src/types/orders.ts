type Order = {
  id: number;
  product: string;
  total: number;
  status: "Processing" | "Shipped" | "Delivered";
};

export type { Order };
