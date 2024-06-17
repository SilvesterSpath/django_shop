import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='card'>
      <img src={product.image} alt={product.name} />
      <div className='card-body'>
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <h6>${product.price}</h6>
      </div>
    </div>
  );
};

export default Product;
