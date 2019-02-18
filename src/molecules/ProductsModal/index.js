import React, { PureComponent } from 'react';
import { func, number, arrayOf } from 'prop-types';

import ProductList from '../../../data.json';
import ProductCard from '../ProductCard';

class ProductsModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      productList: ProductList,
    };
  }

  render() {
    const { products, handleAddProduct, handleRemoveProduct } = this.props;
    const { productList } = this.state;
    return (
      <div className="products-modal">
        <div className="products-modal__products">
          {products.map(product => (
            <button
              type="button"
              onClick={() => handleRemoveProduct(product)}
              key={product}
            >
              <ProductCard pid={product} />
            </button>
          ))}
        </div>
        <div className="products-modal__product-list">
          {productList.map(product => (
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
  }
}

ProductsModal.propTypes = {
  products: arrayOf(number).isRequired,
  handleAddProduct: func.isRequired,
  handleRemoveProduct: func.isRequired,
};

export default ProductsModal;
