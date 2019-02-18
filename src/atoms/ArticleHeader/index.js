import React from 'react';
import { string, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AppsIcon from '@material-ui/icons/Apps';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = () => ({
  icon: {
    fontSize: 12,
    marginRight: 6,
  },
});

const ArticleHeader = ({ type, mode, classes }) => (
  <>
    {type === 'text' && <TextFormatIcon className={classes.icon} />}
    {type === 'product' && <AppsIcon className={classes.icon} />}
    {type === 'favourite' && <StarBorderIcon className={classes.icon} />}
    <Typography>{`${mode} ${type}`}</Typography>
  </>
);

ArticleHeader.propTypes = {
  mode: string,
  type: string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: object.isRequired,
};

ArticleHeader.defaultProps = {
  mode: '',
};

export default withStyles(styles)(ArticleHeader);
