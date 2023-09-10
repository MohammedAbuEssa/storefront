import React from 'react';
import "./Categories.css"
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../Store/active-category';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const activeCategory = useSelector((state) => state.activeCategory);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div>
      <h5 className="MuiTypography-root MuiTypography-h5">Browse our Categories</h5>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className={category.name === activeCategory ? 'active' : ''}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
