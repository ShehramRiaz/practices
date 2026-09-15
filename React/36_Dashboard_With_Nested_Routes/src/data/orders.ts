import type { Order } from "../types/orders";

const orders: Order[] = [
  {
    id: 101,
    product: "UltraSound Pro Wireless Headphones",
    total: 89.99,
    status: "Delivered",
  },
  {
    id: 102,
    product: "SmartFit Fitness Watch",
    total: 129.5,
    status: "Processing",
  },
  {
    id: 103,
    product: "ProBook X15 Laptop",
    total: 749.99,
    status: "Shipped",
  },
];

export { orders };
