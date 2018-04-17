import axios from 'axios'

export const FETCH_BOOKS = 'FETCH_BOOKS'
export const ERR_FETCH_BOOKS = "ERR_FETCH_BOOKS"
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS'
export const ADD_BOOK_FAILED = 'ADD_BOOK_FAILED'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const REMOVE_BOOK_FAILED = 'REMOVE_BOOK_FAILED'
export const FILTER_SEARCH = 'FILTER_SEARCH'

export const fetchBooks = () => {
  return dispatch => {
    axios.get(`http://localhost:8082/api/books`)
    .then(res => dispatch({
      type: FETCH_BOOKS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ERR_FETCH_BOOKS,
      payload: err
    }))
  }
}

export const addBook = (book) => {
  return dispatch => {
    axios.post(`http://localhost:8082/api/books`, book)
    .then(res => dispatch({
      type: ADD_BOOK_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ADD_BOOK_FAILED,
      payload: err
    }))
  }
}

export const removeBook = id => {
  return dispatch => {
    axios.delete(`http://localhost:8082/api/books/${id}`)
    .then(res => dispatch ({
      type: REMOVE_BOOK,
      payload: id
    }))
    .catch(err => dispatch({
      type: REMOVE_BOOK_FAILED,
      payload: err
    }))
  }
}

// export const filterSearch = phrase => {
//   return dispatch => {
//     dispatch({
//       type: FILTER_SEARCH,
//       payload: phrase
//     })
//   }
// }
