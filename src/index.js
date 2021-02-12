import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import App from './components/App';
import bookReducers from './reducers/index';

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'A book title',
      category: 'Action',
    }, {
      id: uuidv4(),
      title: 'Story of my life',
      category: 'Biography',
    }, {
      id: uuidv4(),
      title: '1945: The Great war',
      category: 'History',
    },
  ],
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  bookReducers, initialState, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
