import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../../Store/cart"; // Import the removeFromCart action

const SimpleCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch(); // Get the dispatch function

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId)); // Dispatch the removeFromCart action with the product ID
  };

  return (
    <div className="simple-cart">
      <h3>
        <ShoppingCartIcon /> Cart ({cart.cart.length})
      </h3>
      <ul>
        {cart.cart.map((item) => (
          <li key={item.id}>
            {item.name} ({item.quantity})
            <IconButton
              aria-label="Delete"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleCart;
