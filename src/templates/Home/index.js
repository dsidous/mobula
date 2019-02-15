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
    articles: [],
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

  handleAddProduct = (id) => {
    const { modal: { products } } = this.state;

    if (products.includes(id)) {
      return false;
    }

    return this.setState(
      (prevState) => {
        const newProducts = [...prevState.modal.products, id];
        return { modal: { ...prevState.modal, products: newProducts } };
      },
    );
  }

  handleRemoveProduct = id => (
    this.setState(
      prevState => ({
        modal: {
          ...prevState.modal,
          products: prevState.modal.products.filter(product => product !== id),
        },
      }),
    )
  )

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
      modal: {},
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
                      <ArticleCard
                        article={article}
                        onClick={this.showModal}
                        handleRemove={this.removeArticle}
                      />
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
        {showModal && (
          <Modal
            title={modal.type}
            visible={showModal}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width="80%"
          >
            {modal.type === 'text' && (
              <TextModal
                article={modal}
                handleChange={this.handleChange}
              />
            )}

            {modal.type === 'product' && (
              <ProductsModal
                products={modal.products || []}
                handleAddProduct={this.handleAddProduct}
                handleRemoveProduct={this.handleRemoveProduct}
              />
            )}
          </Modal>
        )}
      </Layout>
    );
  }
}

export default Home;
