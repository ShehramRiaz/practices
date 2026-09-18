import type { NewProduct, Product } from "../types/product";

const STORAGE_KEY = "product-store";

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(200);
    }, 1000);
  });
}

async function getProducts(): Promise<Product[]> {
  await delay();

  const products = localStorage.getItem(STORAGE_KEY);

  if (!products) {
    return [];
  }

  return JSON.parse(products);
}

async function createProduct(newProduct: NewProduct): Promise<Product> {
  const products = await getProducts();

  const product: Product = {
    ...newProduct,
    id: Date.now(),
  };

  products.unshift(product);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));

  return product;
}

async function deleteProduct(id: number): Promise<void> {
  const products = await getProducts();

  const updatedProducts = products.filter((product) => product.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
}

async function updateProduct(
  id: number,
  updatedData: NewProduct,
): Promise<Product> {
  const products = await getProducts();

  const product = products.find((product) => product.id === id);

  if (!product) {
    throw new Error(`Product with ID ${id} doesn't exist.`);
  }

  const newProduct: Product = {
    id,
    ...updatedData,
  };

  const updatedProducts = products.map((product) => {
    return product.id === id ? newProduct : product;
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));

  return newProduct;
}

export { getProducts, createProduct, deleteProduct, updateProduct };
