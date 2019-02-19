import React, { useContext, useState } from 'react';
import { object } from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Context from '../../atoms/Context';
import ArticleHeader from '../../atoms/ArticleHeader';
import TextModal from '../../molecules/TextModal';
import ProductsModal from '../../molecules/ProductsModal';

const styles = () => ({
  dialogHeader: {
    backgroundColor: '#f7f7f7',
    display: 'flex',
    alignItems: 'center',
  },
});

const DialogController = ({ classes }) => {
  const { modal, showModal } = useContext(Context);

  const [article, setModal] = useState(modal);

  const handleChange = ({ target: { value, id } }) => {
    setModal({
      ...article,
      [id]: value,
    });
  };

  const handleAddProduct = (id) => {
    const { products } = article;

    if (products.includes(id)) {
      return false;
    }

    const newProducts = [...article.products, id];

    return setModal({
      ...article,
      products: newProducts,
    });
  };

  const handleRemoveProduct = id => (
    setModal({
      ...article,
      products: article.products.filter(product => product !== id),
    })
  );

  const { handleCancel, handleOk } = useContext(Context);

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
        <ArticleHeader mode="Edit" type={article.type} />
      </DialogTitle>
      <DialogContent>
        {article.type === 'text' && (
          <TextModal
            article={article}
            handleChange={handleChange}
          />
        )}

        {article.type === 'product' && (
          <ProductsModal
            products={article.products || []}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => handleOk(article)}
          color="primary"
          variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogController.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

export default withStyles(styles)(DialogController);
