import { FETCH_BOOKS,
         ERR_FETCH_BOOKS,
         ADD_BOOK_SUCCESS,
         ADD_BOOK_FAILED,
         REMOVE_BOOK,
         REMOVE_BOOK_FAILED } from '../actions'

let initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return [...action.payload];
    case ERR_FETCH_BOOKS:
      return state
    case ADD_BOOK_SUCCESS:
      return [...state, action.payload];
    case ADD_BOOK_FAILED:
      return action.payload;
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload)
    case REMOVE_BOOK_FAILED:
      return [action.payload]
    default:
      return state
  }
}
