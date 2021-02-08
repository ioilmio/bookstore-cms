import { v4 as uuidv4 } from 'uuid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionsTypes';

const intitialState = [];

const books = (state = intitialState, action) => {
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
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];

    default:
      return state;
  }
};

export default books;
