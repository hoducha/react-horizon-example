import React from 'react';
import ReactDOM from 'react-dom';
import { Connector as HorizonConnector } from 'horizon-react';

import App from './App';
import DevTools from './app/containers/DevTools';
import horizon from './app/api/horizon';
import configureStore from './app/store/configureStore';

import './index.css';

const store = configureStore();

function showDevTools() {
  // eslint-disable-next-line
  if (process.env.NODE_ENV !== 'production') {
    return <DevTools />;
  }
  return null;
}

ReactDOM.render(
  <HorizonConnector horizon={horizon} store={store}>
    <div>
      <App />
      {showDevTools()}
    </div>
  </HorizonConnector>,
  document.getElementById('root')
);
