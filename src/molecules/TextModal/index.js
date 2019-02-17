import React, { PureComponent, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class TextModal extends PureComponent {
  render() {
    const { article: { title, body }, handleChange } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            id="title"
            label="Title"
            value={title}
            onChange={handleChange}
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="body"
            label="Body"
            value={body}
            rows="4"
            multiline
            onChange={handleChange}
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
    );
  }
}

export default TextModal;
