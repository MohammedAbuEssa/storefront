import Electronics from "../../assets/Electronics.jpg";
import GAMES from "../../assets/GAMES.png";

const initialState = [
  {
    id: 1,
    name: "Electronics",
    description: "Category Description Goes Here",
    image: Electronics,
  },
  {
    id: 2,
    name: "GAMES",
    description: "Category Description Goes Here",
    image: GAMES,
  },
  // { id: 3, name: "FOOD", description: "Category Description Goes Here" },
  // { id: 3, name: "WEAPONS", description: "Category Description Goes Here" },
];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
