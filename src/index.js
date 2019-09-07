import "./index.css";


import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as _ from "lodash";

import App from "./App";
import reducers from "./reducers";
import DATA_CSV from "./data/dataCsv";
import { convertStats } from "./data/converter";
import { loadPlayers, setStats, setMinimunPlateAppearances } from "./actions";

const stats = convertStats(DATA_CSV);
const players = _.orderBy(
  stats.map(m => ({ number: m.number, name: m.name })),
  m => m.name
);
const minimumPlateAppearances = parseInt(
  _.maxBy(stats.map(m => m.plateAppearances)) * 0.3,
  0
);

let store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(loadPlayers(players));
store.dispatch(setStats(stats));
store.dispatch(setMinimunPlateAppearances(minimumPlateAppearances));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
