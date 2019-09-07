
import './App.css';

import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route} from 'react-router-dom';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

import Home from './components/Home';

// const Test = ()=> <div>test</div>

const theme=createMuiTheme()

const App = () => {


    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div>
            <h2 className="app__header">Estadisticas A3 2017</h2>

            <Route exact path='/' component={Home} />
            {/*<Route path='/test' component={Test} />*/}
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }


export default App;