import { combineReducers, createStore } from "redux";
import categoriesReducer from "./categories/index";
import productsReducer from "./products";
import activeCategoryReducer from "./active-category";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  activeCategory: activeCategoryReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
