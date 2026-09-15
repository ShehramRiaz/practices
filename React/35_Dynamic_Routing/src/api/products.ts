import products from "../data/products";
import type { Product } from "../types/product";

async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(200);
    }, 1000);
  });

  return products;
}

export { getProducts };
