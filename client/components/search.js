import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBook} from '../store/books'
import {Books} from '../components'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: 0,
      books: [],
      title: '',
      author: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  //submits title and/or author inputs by user
  //data sent to redux thunk and updates redux store
  async handleSubmit(event) {
    event.preventDefault()
    const body = {title: this.state.title, author: this.state.author}
    await this.props.getBook(body)
    this.setState({
      books: this.props.books.docs,
      results: this.props.books.numFound
    })
  }

  // filter function based on user input
  handleFilter(event) {
    if (event.target.value === '') {
      this.setState({
        books: this.props.books.docs,
        results: this.props.books.numFound
      })
    } else {
      let newBooks = this.props.books.docs.filter(book => {
        return book.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      })
      this.setState({
        books: newBooks,
        results: newBooks.length
      })
    }
  }
  handleSort(event) {
    //sorting alphabetically based on option chosen by user
    //(A-Z or Z-A)
    let sortedBooks = [...this.state.books]
    if (event.target.value === 'A-Z') {
      sortedBooks.sort(function(a, b) {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
    } else {
      sortedBooks.sort(function(a, b) {
        if (a.title > b.title) {
          return -1
        }
        if (a.title < b.title) {
          return 1
        }
        return 0
      })
    }
    this.setState({
      books: sortedBooks
    })
  }

  render() {
    return (
      <div>
        <div className="bar">
          <form onSubmit={this.handleSubmit} className="searchForm">
            <div className="inputs">
              <label>Author</label>
              <input
                type="text"
                name="author"
                value={this.state.author}
                onChange={this.handleChange}
              />
            </div>
            <div className="inputs">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <button className="button" type="submit">
              Search!
            </button>
          </form>
          <div className="showing">
            Currently showing {this.state.results} books!
          </div>
          <div className="resultsBar">
            <div className="sort">
              <select onChange={this.handleSort}>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>

            <div className="filter inputs">
              <label>Filter Titles</label>
              <input type="text" name="filter" onChange={this.handleFilter} />
            </div>
          </div>
        </div>
        <div className="booksContainer">
          {this.state.books &&
            this.state.books.map((book, idx) => (
              <Books book={book} key={idx} id={idx} />
            ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBook: body => dispatch(getBook(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
