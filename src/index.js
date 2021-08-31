import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storePersistor from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storePersistor.store}>
      <PersistGate loading={null} persistor={storePersistor.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);