import React from 'react';
import { number } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import data from '../../../data.json';

const ProductCard = ({ pid }) => {
  const product = data.find(prod => prod.id === pid);

  return (
    <Zoom in>
      <figure className="product">
        <img src={product.image} alt={product.title} />
        <figcaption>
          <Typography
            style={{ fontWeight: '700' }}
            variant="caption"
            noWrap
          >
            {product.retailer}
          </Typography>
          <Typography variant="caption" noWrap>
            {product.title}
          </Typography>
          <Typography variant="caption">
            {product.price}
          </Typography>
        </figcaption>
      </figure>
    </Zoom>
  );
};

ProductCard.propTypes = {
  pid: number.isRequired,
};

export default ProductCard;
