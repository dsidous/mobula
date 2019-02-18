import React from 'react';
import { shape, string, func } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const TextModal = ({ article: { title, body }, handleChange }) => (
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

TextModal.propTypes = {
  article: shape({
    title: string,
    body: string,
  }).isRequired,
  handleChange: func.isRequired,
};

export default TextModal;
