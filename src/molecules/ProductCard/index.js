import React from 'react';
import { number } from 'prop-types';
import Typography from '@material-ui/core/Typography';

import data from '../../../data.json';

const ProductCard = ({ pid }) => {
  const product = data.find(prod => prod.id === pid);

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

ProductCard.propTypes = {
  pid: number.isRequired,
};

export default ProductCard;
