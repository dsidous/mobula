import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      ? {
        id, type, title: '', body: '',
      }
      : { id, type, products: [] };

    this.setState(prevState => ({ articles: [...prevState.articles, newArticle] }));
  }

  removeArticle = (id) => {
    this.setState(prevState => (
      { articles: prevState.articles.filter(article => article.id !== id) }
    ));
  }

  render() {
    const { articles, showModal, modal } = this.state;

    return (
      <Grid container justify="center">
        <Grid item xs={10} sm={8}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography variant="h4">
                Article editor
              </Typography>
            </Grid>
            {
              articles.map(article => ((
                <Grid item xs={12} key={article.id}>
                  <ArticleCard
                    article={article}
                    onClick={this.showModal}
                    handleRemove={this.removeArticle}
                    className="aricles-row"
                  />
                </Grid>
              )))
            }
            <Grid item xs={12}>
              <AddContentCard addArticle={this.addArticle} />
            </Grid>
          </Grid>
        </Grid>
        {showModal && (
          <Dialog
            fullWidth
            maxWidth="sm"
            open={showModal}
            onClose={this.handleCancel}
          >
            <DialogTitle>
              {`Edit ${modal.type}`}
            </DialogTitle>
            <DialogContent>
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
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCancel} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleOk} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Grid>
    );
  }
}

export default Home;
