import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Products = ({ category }) => {

  const products = useSelector((state) => state.products);
  const {categoryx}=useParams();
  console.log(categoryx);
console.log(products);
  const filteredProducts = products.filter((product) => product.category === categoryx);
console.log(filteredProducts);

  return (
    <div >
      <h2>{categoryx} Products</h2>
      <ul className='card-grid'>
        {filteredProducts.map((product) => (
          <div className='card'>
          <img src={product.image} className='category-img'/>
        <h1>{product.name}</h1>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;

