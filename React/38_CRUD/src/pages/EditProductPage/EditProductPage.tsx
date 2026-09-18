import { useNavigate, useParams } from "react-router";
import { useProducts } from "../../context/ProductsContext/ProductsContext";
import ProductForm from "../../components/ProductForm/ProductForm";
import type { NewProduct } from "../../types/product";
import { useState } from "react";

function EditProductPage() {
  const { id } = useParams();
  const { products, updateProduct } = useProducts();
  const navigate = useNavigate();
  const [updating, setUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);

  const product = products.find((product) => product.id === Number(id));

  async function handleUpdate(data: NewProduct) {
    setUpdating(true);
    setUpdateError(null);

    try {
      await updateProduct(Number(id), data);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setUpdateError(error.message);
      }
    } finally {
      setUpdating(false);
    }
  }

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const initialData: NewProduct = {
    name: product.name,
    description: product.description,
    category: product.category,
    price: product.price,
  };

  return (
    <>
      {updateError && <p>{updateError}</p>}

      <ProductForm
        onSubmit={handleUpdate}
        initialData={initialData}
        submitting={updating}
      />
    </>
  );
}

export default EditProductPage;
