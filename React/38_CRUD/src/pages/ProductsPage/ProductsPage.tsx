import ProductCard from "../../components/ProductCard/ProductCard";
import ProductForm from "../../components/ProductForm/ProductForm";
import { useProducts } from "../../context/ProductsContext/ProductsContext";
import type { NewProduct } from "../../types/product";

function ProductsPage() {
  const { products, loading, error, createProduct, successMessage } =
    useProducts();

  function handleCreateProduct(newProduct: NewProduct) {
    createProduct(newProduct);
  }

  return (
    <>
      <ProductForm onSubmit={handleCreateProduct} />
      <h1>Products</h1>

      {loading && <p>Loading Products...</p>}

      {error && <p>{error}</p>}

      {successMessage && <p>{successMessage}</p>}

      <p>
        {products.length === 0 && !loading ? "No Products Available" : null}
      </p>

      {!loading && !error && (
        <div>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductsPage;
