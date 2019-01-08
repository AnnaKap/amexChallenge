import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBook} from '../store/books'
import {Books} from '../components'

// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'

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
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    const body = {title: this.state.title, author: this.state.author}
    await this.props.getBook(body)
    this.setState({
      books: this.props.books.docs,
      results: this.props.books.numFound
    })
  }

  handleFilter(event) {
    console.log(event.target.value)
    if (event.target.value === '') {
      this.setState({
        books: this.props.books.docs
      })
    } else {
      console.log('yerr', event.target)
      let newBooks = this.props.books.docs.filter(book => {
        return book.title.includes(event.target.value)
      })
      this.setState({
        books: newBooks
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Amex Challenge</h1>
        <div>
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
          <div className="filter">
            <label>filter titles</label>
            <input type="text" name="filter" onChange={this.handleFilter} />
          </div>
        </div>
        {this.state.books &&
          this.state.books.map((book, idx) => (
            <Books book={book} key={idx} idx={idx} />
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

const mapDispatchToProps = dispatch => {
  return {
    getBook: body => dispatch(getBook(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
