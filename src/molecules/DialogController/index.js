import React, { PureComponent } from 'react';
import {
  func,
  bool,
  string,
  number,
  arrayOf,
  shape,
  object,
} from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import ArticleHeader from '../../atoms/ArticleHeader';
import TextModal from '../TextModal';
import ProductsModal from '../ProductsModal';

const styles = () => ({
  dialogHeader: {
    backgroundColor: '#f7f7f7',
    display: 'flex',
    alignItems: 'center',
  },
});

class DialogController extends PureComponent {
  state = this.getInitState();

  getInitState() {
    const { modal, showModal } = this.props;

    return { modal, showModal };
  }

  handleChange = ({ target: { value, id } }) => {
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
      ({ modal }) => {
        const newProducts = [...modal.products, id];
        return { modal: { ...modal, products: newProducts } };
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

  render() {
    const { showModal, modal } = this.state;
    const { handleCancel, handleOk, classes } = this.props;
    return (
      <Dialog
        fullWidth
        maxWidth="sm"
        open={showModal}
        onClose={handleCancel}
      >
        <DialogTitle
          disableTypography
          className={classes.dialogHeader}
        >
          <ArticleHeader mode="Edit" type={modal.type} />
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
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleOk(modal)}
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DialogController.propTypes = {
  showModal: bool.isRequired,
  modal: shape({
    type: string,
    title: string,
    body: string,
    products: arrayOf(number),
    id: number,
  }).isRequired,
  handleCancel: func.isRequired,
  handleOk: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

export default withStyles(styles)(DialogController);
