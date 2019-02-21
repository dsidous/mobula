import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import './index.css';
import App from './App';
import MyTheme from './MyTheme';

render(
  <MuiThemeProvider theme={MyTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
