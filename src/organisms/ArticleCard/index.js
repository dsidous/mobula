import React, { PureComponent, Fragment } from 'react';
import {
  func,
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
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AppsIcon from '@material-ui/icons/Apps';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import ProductCard from '../../molecules/ProductCard';

const styles = () => ({
  cardHeader: {
    backgroundColor: '#f7f7f7',
    textTransform: 'capitalize',
  },
  subheader: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: 12,
    marginRight: 6,
  },
});

class ArticleCard extends PureComponent {
  render() {
    const {
      article,
      article: {
        type, title, body, products, id,
      },
      onClick,
      handleRemove,
      classes,
    } = this.props;

    return (
      <Card>
        <CardHeader
          className={classes.cardHeader}
          classes={{ subheader: classes.subheader }}
          subheader={(
            <Fragment>
              {type === 'text' && <TextFormatIcon className={classes.icon} />}
              {type === 'product' && <AppsIcon className={classes.icon} />}
              {type === 'favourite' && <StarBorderIcon className={classes.icon} />}
              <Typography>{type}</Typography>
            </Fragment>
          )}
          action={(
            <Fragment>
              <IconButton onClick={() => onClick(article)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleRemove(id)}>
                <DeleteIcon />
              </IconButton>
            </Fragment>
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
            <Fragment>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography component="p">
                {body}
              </Typography>
            </Fragment>
          )}
        </CardContent>
      </Card>
    );
  }
}

ArticleCard.propTypes = {
  article: shape({
    type: string,
    title: string,
    body: string,
    products: arrayOf(number),
    id: number,
  }).isRequired,
  onClick: func.isRequired,
  handleRemove: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

export default withStyles(styles)(ArticleCard);
