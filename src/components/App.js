/* eslint-disable no-underscore-dangle */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import Nav from '../containers/Nav';
import rootReducers from '../reducers/index';

const store = createStore(
  rootReducers, composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

const App = () => (
  <div className="app">
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <BookList />
        <BookForm />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
