import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectedBook} from '../store/books'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class Books extends Component {
  constructor(props) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(event) {
    event.preventDefault()
    let id = event.target.parentNode.id
    //close all details of books
    let close = document.getElementsByClassName('details')
    for (let i = 0; i < close.length; i++) {
      if (close[i].parentNode.id !== id) {
        close[i].style.display = 'none'
      }
    }

    let details = document.getElementById(id).getElementsByClassName('details')
    //open the details of newly clicked book
    for (let i = 0; i < details.length; i++) {
      details[i].style.display === '' || details[i].style.display === 'none'
        ? (details[i].style.display = 'inline')
        : (details[i].style.display = 'none')
    }
  }
  render() {
    console.log('book', this.props.book)
    return (
      <div className="aBook" id={this.props.id} onClick={this.clickHandler}>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.author_name[0]}</div>
        {this.props.book.cover_i ? (
          <img
            className="details"
            src={`http://covers.openlibrary.org/b/id/${
              this.props.book.cover_i
            }-M.jpg`}
          />
        ) : (
          <img className="details" src="book.jpg" />
        )}
        <div className="details">
          Publisher: {this.props.book.publisher[0]}
          <br />
          Published Date: {this.props.book.publish_date[0]}
          <br />
          ISBN: {this.props.book.isbn[0]}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectedBook: index => dispatch(selectedBook(index))
  }
}
export default connect(null, mapDispatchToProps)(Books)
