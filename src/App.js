import React from 'react';
import Drawer from './components/side_bar';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Signin from './components/sign_in';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';
import { BrowserRouter } from 'react-router-dom';
import { Router, Switch, Route, Redirect} from "react-router-dom";
import MiniDrawer from "./components/side_bar";
import sign_in from "./components/sign_in";


// use default theme
// const theme = createMuiTheme();

// Or Create your Own theme:
var theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F8F8FF',
    },
    secondary: {
      main: '#37727B',
    },
  },
});

theme = responsiveFontSizes(theme)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/client"
              component={sign_in} />
            <Route
              exact
              path="/physio"
              component={sign_in} />
           <Route path="/pacient" render={(props) => (<MiniDrawer {...props} text_menu={"Panel Principal Paciente"} text_right={"Logout"}/>
  )}/>
        </Switch>
        </BrowserRouter>
    </div>
    </MuiThemeProvider>
  );
}

export default App;