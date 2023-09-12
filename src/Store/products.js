import CallofDuty from "../assets/CALLOFDUTY.jpg";
import GTAV from "../assets/GTAV.jpg";
import Laptop from "../assets/Laptop.jpg";
import Smartphone from "../assets/Smartphone.jpg";

const initialState = [
  { id: 1, name: "Laptop", category: "Electronics", image: Laptop },
  { id: 2, name: "T-Shirt", category: "Clothing", image: "" },
  { id: 3, name: "GTA V", category: "GAMES", image: GTAV },
  { id: 4, name: "Smartphone", category: "Electronics", image: Smartphone },
  { id: 5, name: "Jeans", category: "Clothing", image: "" },
  { id: 6, name: "Call of Duty", category: "GAMES", image: CallofDuty },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
