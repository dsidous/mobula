import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ArticleCard from '../../organisms/ArticleCard';
import AddContentCard from '../../organisms/AddContentCard';
import DialogController from '../../molecules/DialogController';

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

  handleOk = (modal) => {
    this.setState((prevState) => {
      const { articles } = prevState;
      const index = articles.findIndex(article => article.id === modal.id);
      articles[index] = modal;

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
          <DialogController
            showModal={showModal}
            modal={modal}
            handleCancel={this.handleCancel}
            handleOk={this.handleOk}
          />
        )}
      </Grid>
    );
  }
}

export default Home;
