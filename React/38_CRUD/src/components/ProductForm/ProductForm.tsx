import { useState, type FormEvent } from "react";
import type { NewProduct } from "../../types/product";

type ProductFormProps = {
  onSubmit: (product: NewProduct) => void;
  initialData?: NewProduct;
  submitting?: boolean;
};

function ProductForm({ onSubmit, initialData, submitting }: ProductFormProps) {
  const [name, setName] = useState(initialData?.name ?? "");
  const [category, setCategory] = useState(initialData?.category ?? "");
  const [price, setPrice] = useState(initialData?.price ?? 0);
  const [description, setDescription] = useState(
    initialData?.description ?? "",
  );

  let buttonText = null;

  if (submitting) {
    buttonText = "Submitting...";
  } else {
    buttonText = initialData ? "Update Product" : "Create Product";
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newProduct: NewProduct = {
      name,
      category,
      price,
      description,
    };

    onSubmit(newProduct);

    setName("");
    setCategory("");
    setPrice(0);
    setDescription("");
  }

  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Product name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            id="category"
            placeholder="Product category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            placeholder="Product price..."
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" disabled={submitting}>
          {buttonText}
        </button>
      </form>
    </>
  );
}

export default ProductForm;
