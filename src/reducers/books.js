import { v4 as uuidv4 } from 'uuid';
import {
  CREATE_BOOK,
  REMOVE_BOOK,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from '../actions/actionsTypes';

const intitialState = [{}];

const booksReducer = (state = intitialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      return [...state,
        {
          id: uuidv4(),
          title: action.title,
          category: action.category,
        },
      ];
    }
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    case FETCH_BOOKS_REQUEST:
      return [
        {
          loading: true,
        },
      ];
    case FETCH_BOOKS_SUCCESS:
      return [
        {
          loading: false,
          booksDataFetch: action.payload,
          error: '',
        },
      ];
    case FETCH_BOOKS_FAILURE:
      return [
        {
          loading: false,
          booksDataFetch: [],
          error: action.payload,
        },
      ];
    default: return state;
  }
};

export default booksReducer;
