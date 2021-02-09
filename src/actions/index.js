import { CREATE_BOOK, REMOVE_BOOK } from './actionsTypes';

export const createBook = book => ({ type: CREATE_BOOK, book });
export const removeBook = id => ({ type: REMOVE_BOOK, id });
