import React from 'react';
import { func, number, arrayOf } from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AppsIcon from '@material-ui/icons/Apps';

import ProductList from '../../../data.json';
import ProductCard from '../ProductCard';

const ProductsModal = ({ products, handleAddProduct, handleRemoveProduct }) => (
  <div className="products-modal">
    <div className="products-modal__products">
      {products.map(product => (
        <div key={product}>
          <ProductCard pid={product} />
          <Fab
            badgeContent="x"
            color="primary"
            onClick={() => handleRemoveProduct(product)}
          >
            <AppsIcon />
          </Fab>
        </div>
      ))}
    </div>
    <div className="products-modal__product-list">
      {ProductList.map(product => (
        <button
          type="button"
          onClick={() => handleAddProduct(product.id)}
          key={product.id}
        >
          <ProductCard pid={product.id} />
        </button>
      ))}
    </div>
  </div>
);

ProductsModal.propTypes = {
  products: arrayOf(number).isRequired,
  handleAddProduct: func.isRequired,
  handleRemoveProduct: func.isRequired,
};

export default ProductsModal;
