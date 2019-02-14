import React, { PureComponent } from 'react';
import {
  Card, Row, Col,
} from 'antd';

import ProductCard from '../../molecules/ProductCard';

class ArticleCard extends PureComponent {
  render() {
    const { article: { type, title, body, products }, onClick, article } = this.props;

    return (
      <Card
        size="small"
        title={type}
        onClick={() => onClick(article)}
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
