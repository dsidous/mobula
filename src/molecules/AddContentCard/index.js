import React, { useContext } from 'react';
import { object } from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AppsIcon from '@material-ui/icons/Apps';
import StarIcon from '@material-ui/icons/Star';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import Context from '../../atoms/Context';
import MyTheme from '../../MyTheme';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  cardHeader: {
    backgroundColor: '#f7f7f7',
  },
});

const AddContentCard = ({ classes }) => {
  const { addArticle } = useContext(Context);
  return (
    <MuiThemeProvider theme={MyTheme}>
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
            style={MyTheme.palette.textBlue}
            onClick={() => addArticle('text')}
          >
            <TextFormatIcon />
          </Fab>
          <Fab
            className={classes.button}
            size="small"
            variant="round"
            style={MyTheme.palette.productTeal}
            onClick={() => addArticle('product')}
          >
            <AppsIcon />
          </Fab>
          <Fab
            className={classes.button}
            size="small"
            variant="round"
            style={MyTheme.palette.featuredAmber}
            onClick={() => addArticle('featured')}
          >
            <StarIcon />
          </Fab>
        </CardContent>
      </Card>
    </MuiThemeProvider>
  );
};

AddContentCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

export default withStyles(styles)(AddContentCard);
