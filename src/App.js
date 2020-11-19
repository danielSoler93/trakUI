import React from 'react';
import TopBar from './components/top_bar';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

// use default theme
// const theme = createMuiTheme();

// Or Create your Own theme:
var theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

theme = responsiveFontSizes(theme)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
        <TopBar  text_menu="Login Page" text_right="logout" color='primary' />
    </div>
    </MuiThemeProvider>
  );
}

export default App;