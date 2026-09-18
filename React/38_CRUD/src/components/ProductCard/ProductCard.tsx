import { useNavigate } from "react-router";
import { useProducts } from "../../context/ProductsContext/ProductsContext";
import type { Product } from "../../types/product";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();

  function handleDelete(id: number) {
    const confirmed = confirm("Are you sure you want to delete this product?");

    if (!confirmed) return;

    deleteProduct(id);
  }

  function handleEdit(id: number) {
    navigate(`/products/edit/${id}`);
  }

  return (
    <div>
      <span>{product.category}</span>
      <div>{product.name}</div>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button onClick={() => handleDelete(product.id)}>Delete</button>
      <button onClick={() => handleEdit(product.id)}>Edit</button>
    </div>
  );
}

export default ProductCard;
