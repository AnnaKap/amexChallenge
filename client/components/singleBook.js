import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectedBook} from '../store/books'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class SingleBook extends Component {
  constructor(props) {
    super(props)
    let book = this.props.selectedBook
  }

  render() {
    return (
      <div className="aBook" id={this.book.title}>
        <div>{this.book.title}</div>
        <div>{this.book.author_name[0]}</div>
        {this.book.cover_i ? (
          <img
            src={`http://covers.openlibrary.org/b/id/${
              this.props.book.cover_i
            }-M.jpg`}
          />
        ) : (
          <img src="book.jpg" />
        )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectedBook: index => dispatch(selectedBook(index))
  }
}
export default connect(null, mapDispatchToProps)(SingleBook)
