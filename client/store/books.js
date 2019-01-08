import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_BOOK = 'GOT_BOOK'

/**
 * INITIAL STATE
 */
const defaultBook = {}

/**
 * ACTION CREATORS
 */
const gotBook = book => ({type: GOT_BOOK, book})

/**
 * THUNK CREATORS
 */
export const getBook = body => async dispatch => {
  try {
    const {data} = await axios.post(`/api/books/`, body)
    console.log('books', data)
    return dispatch(gotBook(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultBook, action) {
  switch (action.type) {
    case GOT_BOOK:
      return action.book
    default:
      return state
  }
}