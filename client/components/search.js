import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBook} from '../store/books'
import {Books} from '.'

// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    const body = this.state
    await this.props.getBook(body)
  }
  //http://covers.openlibrary.org/b/id/[cover_i]-M.jpg
  render() {
    if (this.props.books.docs) {
      console.log('book', this.props.books)
    }
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
