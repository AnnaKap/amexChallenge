import React, {Component} from 'react'
import axios from 'axios'

// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {value: 0}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    const data = axios.get(`/api/books`)
    console.log(data)
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Amex Challende</h1>
        <nav>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </nav>
        <hr />
      </div>
    )
  }
}

export default Navbar
