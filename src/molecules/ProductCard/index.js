import React from 'react';
import Typography from '@material-ui/core/Typography';

import data from '../../../data.json';

const ProductCard = (props) => {
  const product = data.find(prod => prod.id === props.pid);

  return (
    <figure className="product">
      <img src={product.image} alt={product.title} />
      <figcaption>
        <Typography variant="subtitle2">
          {product.retailer}
        </Typography>
        <Typography noWrap>
          {product.title}
        </Typography>
        <Typography>
          {product.price}
        </Typography>
      </figcaption>
    </figure>
  );
};

export default ProductCard;
