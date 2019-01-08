import React, {Component} from 'react'
import {connect} from 'react-redux'

class Books extends Component {
  constructor(props) {
    super(props)

    console.log('books props', props)
    const booksArr = props.books.docs
  }
  render() {
    return (
      <div>
        {this.props.books.docs &&
          this.props.books.docs.map((book, idx) => (
            <div className="aBook" key={idx}>
              <div>{book.title}</div>
              <div>{book.author_name[0]}</div>
            </div>
          ))}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    books: state.books
  }
}
export default connect(mapStateToProps)(Books)
