import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import store from './store'

import App from './components/App/App'

import ServiceLamp from './services/serviceLamp'
import ContextServiceProducts from './components/Context/ContextServiceProducts'

const serviceLamp = new ServiceLamp()

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <ContextServiceProducts.Provider value={serviceLamp}>
        <App />
      </ContextServiceProducts.Provider>
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);

