import React, { PureComponent } from 'react';

class ProductsModal extends PureComponent {
  render() {
    const { article: { products }, handleChange } = this.props;
    return (
      <div>
        Products
      </div>
    );
  }
}

export default ProductsModal;
