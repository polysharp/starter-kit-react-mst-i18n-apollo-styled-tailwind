import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import store from './store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
