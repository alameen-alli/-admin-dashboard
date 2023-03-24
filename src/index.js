import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './contexts/ContextProvider';
import App from './App';
import './index.css';

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
