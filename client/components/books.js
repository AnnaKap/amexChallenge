import React, {Component} from 'react'
import {connect} from 'react-redux'

const Books = props => {
  console.log('book props', props)
  let imgUrl
  props.book.cover_i
    ? (imgUrl = `http://covers.openlibrary.org/b/id/${
        props.book.cover_i
      }-M.jpg`)
    : (imgUrl = 'book.jpg')
  return (
    <div className="aBook" idx={props.idx}>
      <div>{props.book.title}</div>
      <div>{props.book.author_name[0]}</div>
      <img src={imgUrl} />
    </div>
  )
}

export default Books
