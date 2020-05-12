import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

import store from './store';
import App from './App';

onPatch(store, (patch) => {
  console.log(patch);
});
makeInspectable(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
