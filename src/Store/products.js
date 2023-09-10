const initialState = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "T-Shirt", category: "Clothing" },
  { id: 3, name: "Book 1", category: "Books" },
  { id: 4, name: "Smartphone", category: "Electronics" },
  { id: 5, name: "Jeans", category: "Clothing" },
  { id: 6, name: "Book 2", category: "Books" },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
