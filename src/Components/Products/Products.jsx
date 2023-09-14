import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Store/cart"; // Import the addToCart action

const Products = () => {
  const products = useSelector((state) => state.products);
  const { categoryx } = useParams();
  const dispatch = useDispatch(); // Get the dispatch function

  const filteredProducts = products.filter(
    (product) => product.category === categoryx
  );

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the selected product
  };

  return (
    <div>
      <h2>{categoryx} Products</h2>
      <ul className="card-grid">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.image}
              className="category-img"
              alt={product.name}
            />
            <h1>{product.name}</h1>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
