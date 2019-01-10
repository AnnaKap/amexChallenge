import React, {Component} from 'react'

class Books extends Component {
  constructor(props) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
  }
  // eslint-disable-next-line complexity
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

    if (id) {
      let details = document
        .getElementById(id)
        .getElementsByClassName('details')
      //open the details of newly clicked book
      for (let i = 0; i < details.length; i++) {
        details[i].style.display === '' || details[i].style.display === 'none'
          ? (details[i].style.display = 'inline')
          : (details[i].style.display = 'none')
      }
    }
  }
  render() {
    return (
      <div className="aBook" id={this.props.id} onClick={this.clickHandler}>
        <div>{this.props.book.title}</div>
        <div>
          By
          {this.props.book.author_name
            ? ` ${this.props.book.author_name[0]}`
            : ' n/a'}
        </div>
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
          Publisher:{' '}
          {this.props.book.publisher ? this.props.book.publisher[0] : 'n/a'}
          <br />
          Published Date:{' '}
          {this.props.book.publish_date
            ? this.props.book.publish_date[0]
            : 'n/a'}
          <br />
          ISBN: {this.props.book.isbn ? this.props.book.isbn[0] : 'n/a'}
        </div>
      </div>
    )
  }
}

export default Books
