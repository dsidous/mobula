import React, { PureComponent } from 'react';
import {
  Layout, Card, Button, Row, Col,
} from 'antd';


class Home extends PureComponent {
  state = {};

  render() {
    const {
      Header, Content, Footer
    } = Layout;
    return (
      <Layout>
        <Header className="header">
          Mobula test
        </Header>
        <Content style={{ padding: '50px 50px 0' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
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
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2018 Created by TJ
        </Footer>
      </Layout>
    );
  }
}

export default Home;
