import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import ReduxStore from './redux/store';

const { store, persistor } = ReduxStore;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
