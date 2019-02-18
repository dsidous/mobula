import React from 'react';
import { func, object } from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AppsIcon from '@material-ui/icons/Apps';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  cardHeader: {
    backgroundColor: '#f7f7f7',
  },
});

const AddContentCard = ({ addArticle, classes }) => (
  <Card>
    <CardHeader
      className={classes.cardHeader}
      subheader="+ Add content"
    />
    <CardContent>
      <Fab
        className={classes.button}
        size="small"
        variant="round"
        color="primary"
        type="primary"
        onClick={() => addArticle('text')}
      >
        <TextFormatIcon />
      </Fab>
      <Fab
        className={classes.button}
        size="small"
        variant="round"
        color="primary"
        type="primary"
        onClick={() => addArticle('product')}
      >
        <AppsIcon />
      </Fab>
      <Fab
        className={classes.button}
        size="small"
        variant="round"
        color="primary"
        type="primary"
        onClick={() => addArticle('favourite')}
      >
        <StarBorderIcon />
      </Fab>
    </CardContent>
  </Card>
);

AddContentCard.propTypes = {
  addArticle: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

export default withStyles(styles)(AddContentCard);
