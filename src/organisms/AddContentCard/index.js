import React, { PureComponent } from 'react';
import {
  Card, Button, Row, Col,
} from 'antd';


class AddContentCard extends PureComponent {
  render() {
    return (
      <Card
        size="small"
        title="+ Add content"
      >
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Button type="primary" shape="circle" icon="font-colors" />
          </Col>
          <Col className="gutter-row" span={6}>
            <Button type="primary" shape="circle" icon="appstore" />
          </Col>
          <Col className="gutter-row" span={6}>
            <Button type="primary" shape="circle" icon="star" />
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default AddContentCard;
