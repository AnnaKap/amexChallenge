import React, {Component} from 'react'
import axios from 'axios'

// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      format: 'ISBN'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }
  async handleSelect(event) {
    // set local state format to selection
    await this.setState({format: event.target.value})
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    const body = {
      format: this.state.format,
      value: this.state.value
    }

    const data = axios.post(`/api/books/`, body)
    console.log(data)
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Amex Challende</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <select onChange={this.handleSelect} value={this.state.format}>
                <option>ISBN</option>
                <option>LCCN</option>
                <option>OCLC</option>
                <option>OLID</option>
              </select>
            </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Navbar
