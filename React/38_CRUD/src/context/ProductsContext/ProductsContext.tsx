import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { NewProduct, Product } from "../../types/product";
import {
  createProduct as createProductApi,
  getProducts,
  deleteProduct as deleteProductApi,
  updateProduct as updateProductApi,
} from "../../api/products";

type ProductsContextValue = {
  products: Product[];
  loading: boolean;
  error: string | null;
  successMessage: string | null;
  createProduct: (newProduct: NewProduct) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  updateProduct: (id: number, updatedData: NewProduct) => Promise<void>;
};

const ProductsContext = createContext<ProductsContextValue | null>(null);

function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      setError(null);

      try {
        const products = await getProducts();

        setProducts(products);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  async function createProduct(newProduct: NewProduct) {
    setError(null);
    setSuccessMessage(null);

    try {
      const product = await createProductApi(newProduct);

      setProducts((currentProducts) => [product, ...currentProducts]);
      setSuccessMessage("Product created successfully!");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  async function deleteProduct(id: number): Promise<void> {
    setError(null);
    setSuccessMessage(null);

    try {
      await deleteProductApi(id);

      setProducts((currentProducts) =>
        currentProducts.filter((product) => product.id !== id),
      );
      setSuccessMessage("Product Deleted Successfully");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  async function updateProduct(
    id: number,
    updatedData: NewProduct,
  ): Promise<void> {
    setError(null);
    setSuccessMessage(null);

    try {
      const updatedProduct = await updateProductApi(id, updatedData);

      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product,
        ),
      );

      setSuccessMessage("Product updated successfully!");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        successMessage,
        createProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be called inside ProductsProvider.");
  }

  return context;
}

export {
  ProductsContext,
  ProductsProvider,
  useProducts,
  type ProductsContextValue,
};
