const intitialState = [];

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const books = (state = intitialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      return [...state,
        {
          id: action.book.id,
          title: action.book.title,
          category: action.book.category,
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
