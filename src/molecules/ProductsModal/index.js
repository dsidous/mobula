import React from 'react';
import {
  func,
  number,
  arrayOf,
  object,
} from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ProductList from '../../../data.json';
import ProductCard from '../ProductCard';

const styles = () => ({
  cardHeader: {
    backgroundColor: '#f7f7f7',
    padding: 5,
  },
  wrapper: {
    padding: 10,
    position: 'relative',
  },
  icon: {
    backgroundColor: '#999',
    color: '#fff',
    padding: 0,
    position: 'absolute',
    right: 0,
    transform: 'rotate(45deg)',
    top: 0,
  },
});

const ProductsModal = ({
  products,
  handleAddProduct,
  handleRemoveProduct,
  classes,
}) => (
    <div className="products-modal">
      <div className="products-modal__products">
        {products.map(product => (
          <div
            key={product}
            className={classes.wrapper}
          >
            <ProductCard pid={product} />
            <IconButton
              className={classes.icon}
              onClick={() => handleRemoveProduct(product)}
            >
              <AddCircleIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <div>
        <Card style={{ marginTop: 10 }}>
          <CardHeader
            className={classes.cardHeader}
            title={(
              <Typography variant="subtitle2">
                Grabs
              </Typography>
            )}
            subheader={(
              <Typography variant="caption">
                Items grabbed to this article
              </Typography>
            )}
          />
          <CardContent className="products-modal__product-list">
            {ProductList.map(product => (
              <button
                style={{ textAlign: 'left' }}
                type="button"
                onClick={() => handleAddProduct(product.id)}
                key={product.id}
              >
                <ProductCard pid={product.id} />
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );

ProductsModal.propTypes = {
  products: arrayOf(number).isRequired,
  handleAddProduct: func.isRequired,
  handleRemoveProduct: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

export default withStyles(styles)(ProductsModal);
