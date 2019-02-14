import React, { PureComponent } from 'react';
import {
  Card, Row, Col,
} from 'antd';

import ProductCard from '../../molecules/ProductCard';

class ArticleCard extends PureComponent {
  constructor(props) {
    super(props);

    const { article: { type, title, body, products } } = this.props;

    this.state = {
      type,
      title,
      body,
      products,
    };
  }

  render() {
    const {
      type,
      title,
      body,
      products,
    } = this.state;

    return (
      <Card
        size="small"
        title={type}
      >
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            {type === 'products' && (
              <div className="product-grid">
                {products.map(product => <ProductCard key={product} pid={product} />)}
              </div>
            )}
            {type === 'text' && (
              <div>
                <h3>
                  {title}
                </h3>
                <p>
                  {body}
                </p>
              </div>
            )}
          </Col>
        </Row>
      </Card>
    );
  }
}

export default ArticleCard;
