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
    <div>
      <h2>{categoryx} Products</h2>
      
        {filteredProducts.map((product) => (
          <p key={product.id}><img src={product.image}/>{product.name}</p>
        ))}
      
    </div>
  );
};

export default Products;
