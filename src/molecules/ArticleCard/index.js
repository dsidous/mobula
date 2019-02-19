import React, { useContext } from 'react';
import {
  arrayOf,
  string,
  shape,
  number,
  object,
} from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Zoom from '@material-ui/core/Zoom';

import Context from '../../atoms/Context';
import ArticleHeader from '../../atoms/ArticleHeader';
import ProductCard from '../../atoms/ProductCard';

const styles = () => ({
  cardHeader: {
    backgroundColor: '#f7f7f7',
    textTransform: 'capitalize',
  },
  subheader: {
    display: 'flex',
    alignItems: 'center',
  },
  action: {
    margin: 0,
  },
  iconRoot: {
    padding: 0,
    margin: '0 5px',
  },
  icon: {
    fontSize: 12,
    marginRight: 6,
  },
});

const ArticleCard = ({
  article,
  article: {
    type, title, body, products, id,
  },
  classes,
}) => {
  const { onClick, handleRemove } = useContext(Context);
  return (
    <Zoom in>
      <Card>
        <CardHeader
          className={classes.cardHeader}
          classes={{
            subheader: classes.subheader,
            action: classes.action,
          }}
          subheader={(
            <ArticleHeader type={type} />
          )}
          action={(
            <>
              <IconButton
                className={classes.iconRoot}
                onClick={() => onClick(article)}
              >
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton
                className={classes.iconRoot}
                onClick={() => handleRemove(id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </>
          )}
        />
        <CardContent>
          {type === 'product' && products.length === 0 && (
            <Typography
              align="center"
              variant="subtitle1"
              color="textSecondary"
            >
              No products added.
            </Typography>
          )}
          {type === 'product' && products.length !== 0 && (
            <Grid container spacing={24}>
              {products.map(product => (
                <Grid item sm={3} xs={12} key={product}>
                  <ProductCard pid={product} />
                </Grid>
              ))}
            </Grid>
          )}
          {type === 'text' && title === '' && body === '' && (
            <Typography
              align="center"
              variant="subtitle1"
              color="textSecondary"
            >
              No text added.
            </Typography>
          )}
          {type === 'text' && (title !== '' || body !== '') && (
            <>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography component="p">
                {body}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Zoom>
  );
};

ArticleCard.propTypes = {
  article: shape({
    type: string,
    title: string,
    body: string,
    products: arrayOf(number),
    id: number,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

export default withStyles(styles)(ArticleCard);
