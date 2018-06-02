import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { store } from './configureStore';
import Routes from './Routes';

const theme = createMuiTheme({
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeProvider theme={{}}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'), // eslint-disable-line
);
