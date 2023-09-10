import { combineReducers, createStore } from "redux";
import categoriesReducer from "./categories/index";
import productsReducer from "./products";
import activeCategoryReducer from "./active-category";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  activeCategory: activeCategoryReducer,
});

const store = createStore(rootReducer);

export default store;
