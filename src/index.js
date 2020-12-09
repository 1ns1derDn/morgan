import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import store from './store'

import App from './components/App/App'

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);

