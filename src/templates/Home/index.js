import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Context from '../../atoms/Context';
import Articles from '../../organisms/Articles';
import AddContentCard from '../../molecules/AddContentCard';
import DialogController from '../../organisms/DialogController';

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

  getContext = () => ({
    ...this.state,
    onClick: this.showModal,
    handleCancel: this.handleCancel,
    handleOk: this.handleOk,
    addArticle: this.addArticle,
    handleRemove: this.removeArticle,
  })

  render() {
    const { showModal } = this.state;

    return (
      <Context.Provider value={this.getContext()}>
        <Grid container justify="center">
          <Grid item xs={10} sm={8}>
            <Grid container spacing={24}>

              <Grid item xs={12}>
                <Typography variant="h4">
                  Article editor
                </Typography>
              </Grid>

              <Articles />

              <Grid item xs={12}>
                <AddContentCard />
              </Grid>

            </Grid>
          </Grid>
          {showModal && (
            <DialogController />
          )}
        </Grid>
      </Context.Provider>
    );
  }
}

export default Home;
