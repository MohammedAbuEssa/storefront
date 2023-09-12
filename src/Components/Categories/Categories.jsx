import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../Store/active-category';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CategoryCard = ({ category }) => {
  const activeCategory = useSelector((state) => state.activeCategory);
  const dispatch = useDispatch();

  const handleCategoryClick = () => {
    dispatch(setActiveCategory(category.name));
  };

  return (
    <Card
      onClick={handleCategoryClick}
      className={`category-card ${category.name === activeCategory ? 'active' : ''}`}
    >
      <Link to={`/products/${category.name}`}>
        <img src={category.image} alt={category.name} />
        <CardContent>
          <Typography variant="h6" component="div">
            {category.name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

const CategoryList = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <h5 className="MuiTypography-root MuiTypography-h5">Browse our Categories</h5>
      <div className="category-list">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
