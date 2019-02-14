import React from 'react';
import data from '../../../data.json';

const ProductCard = (props) => {
  const product = data.find(prod => prod.id === props.pid);

  return (
    <figure className="product">
      <img src={product.image} alt={product.title} />
      <figcaption>
        <p className="product-retailer">
          {product.retailer}
        </p>
        <p className="product-title">
          {product.title}
        </p>
        <p className="product-price">
          {product.price}
        </p>
      </figcaption>
    </figure>
  );
};

export default ProductCard;
