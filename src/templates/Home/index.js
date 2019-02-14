import React, { PureComponent } from 'react';
import {
  Layout, Row, Col, Modal,
} from 'antd';

import ArticleCard from '../../organisms/ArticleCard';
import AddContentCard from '../../organisms/AddContentCard';
import TextModal from '../../molecules/TextModal';
import ProductsModal from '../../molecules/ProductsModal';

class Home extends PureComponent {
  state = {
    articles: [
      {
        id: 1,
        type: 'text',
        title: 'This is a title',
        body: 'This is body text',
      },
      {
        id: 2,
        type: 'products',
        products: [167687, 168012],
      },
      {
        id: 3,
        type: 'text',
        title: 'Title of final text block',
        body: 'This is body text again',
      },
    ],
    showModal: false,
    modal: {},
  };

  showModal = (modal) => {
    this.setState({
      showModal: true,
      modal,
    });
  }

  handleChange = (e) => {
    const { value, id } = e.target;
    this.setState(prevState => ({
      modal: {
        ...prevState.modal,
        [id]: value,
      },
    }));
  }

  handleOk = () => {
    this.setState((prevState) => {
      const { articles } = prevState;
      const index = articles.findIndex(article => article.id === prevState.modal.id);
      articles[index] = prevState.modal;

      return {
        articles,
        showModal: false,
        modal: {},
      };
    });
  };

  handleCancel = () => {
    this.setState({
      showModal: false,
    });
  }

  addArticle = (type) => {
    const { articles } = this.state;
    const id = articles.length + 1;
    const newArticle = type === 'text'
      ? { id, type, title: '', body: '' }
      : { id, type, products: [] };

    this.setState(prevState => ({ articles: [...prevState.articles, newArticle] }));
  }

  removeArticle = (id) => {
    this.setState(prevState => (
      { articles: prevState.articles.filter(article => article.id !== id) }
    ));
  }

  render() {
    const {
      Header, Content, Footer,
    } = Layout;

    const { articles, showModal, modal } = this.state;

    return (
      <Layout>
        <Header className="header">
          Mobula test
        </Header>
        <Content style={{ padding: '50px 50px 0' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {
                articles.map(article => ((
                  <Row className="aricles-row" key={article.id}>
                    <Col>
                      <ArticleCard article={article} onClick={this.showModal} handleRemove={this.removeArticle} />
                    </Col>
                  </Row>
                )))
              }
              <Row className="aricles-row">
                <Col>
                  <AddContentCard addArticle={this.addArticle} />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2018 Created by TJ
        </Footer>
        <Modal
          title={modal.type}
          visible={showModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {modal.type === 'text' && (
            <TextModal article={modal} handleChange={this.handleChange} />
          )}

          {modal.type === 'products' && (
            <ProductsModal article={modal} handleChange={this.handleChange} />
          )}
        </Modal>
      </Layout>
    );
  }
}

export default Home;
