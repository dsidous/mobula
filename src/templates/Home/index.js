import React, { PureComponent } from 'react';
import {
  Layout, Row, Col, Modal,
} from 'antd';

import ArticleCard from '../../organisms/ArticleCard';
import AddContentCard from '../../organisms/AddContentCard';
import MyModal from '../../molecules/Modal';

class Home extends PureComponent {
  state = {
    articles: [
      {
        type: 'text',
        title: 'This is a title',
        body: 'This is body text',
      },
      {
        type: 'products',
        products: [167687, 168012],
      },
      {
        type: 'text',
        title: 'Title of final text block',
        body: 'This is body text again',
      },
    ],
    showModal: false,
  };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  }

  handleOk = (e) => {
    this.setState({
      showModal: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const {
      Header, Content, Footer,
    } = Layout;

    const { articles, showModal } = this.state;

    return (
      <Layout>
        <Header className="header">
          Mobula test
        </Header>
        <Content style={{ padding: '50px 50px 0' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {
                articles.map((article, i) => ((
                  <Row className="aricles-row" key={i}>
                    <Col>
                      <ArticleCard article={article} />
                    </Col>
                  </Row>
                )))
              }
              <Row className="aricles-row">
                <Col>
                  <AddContentCard />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2018 Created by TJ
        </Footer>
        <Modal
          title="Basic Modal"
          visible={showModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <MyModal article={articles[0]} />
        </Modal>
      </Layout>
    );
  }
}

export default Home;
