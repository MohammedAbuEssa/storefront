import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../../Store/active-category";
import "./Categories.css";

const CategoryList = () => {
  const categories = useSelector((state) => state.categories);
  const activeCategory = useSelector((state) => state.activeCategory);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div>
      <h5 className="MuiTypography-root MuiTypography-h5">
        Browse our Categories
      </h5>
      <ul className="card-grid">
        {categories.map((category) => (
          <div className="card" key={category.id}>
            <Link
              to={`/products/${category.name}`}
              onClick={() => handleCategoryClick(category.name)}
              className={category.name === activeCategory ? "active" : ""}
            >
              <img src={category.image} className="category-img" />
              <h1>{category.name}</h1>
            </Link>
          </div>
          // </a>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
