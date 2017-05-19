// @flow

import './App.css';

import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';

const App = () => {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
            <h2 className="app__header">Estadisticas A3 2017</h2>

            <Route path='/' component={Home} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }

App.contextTypes = {
  store: PropTypes.object
}

export default App;