import React, { PureComponent, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AppsIcon from '@material-ui/icons/Apps';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import ProductCard from '../../molecules/ProductCard';

const styles = theme => ({
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
        type, title, body, products,
      },
      onClick,
      classes,
    } = this.props;

    return (
      <Card
        onClick={() => onClick(article)}
      >
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
                <Grid item sm={3} xs={12}>
                  <ProductCard key={product} pid={product} />
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

export default withStyles(styles)(ArticleCard);
