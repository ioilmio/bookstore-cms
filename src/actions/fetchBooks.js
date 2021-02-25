import axios from 'axios';
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from './actionsTypes';

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = books => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = error => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

const fetchBooks = () => dispatch => {
  dispatch(fetchBooksRequest);
  axios.get('http://localhost:3000/api/v1/books')
    .then(response => {
      const booksData = response.data;
      console.log(response.data);
      dispatch(fetchBooksSuccess(booksData));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchBooksFailure(errorMsg));
    });
};
export default fetchBooks;
