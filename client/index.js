import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import {Search} from './components'

ReactDOM.render(
  <Provider store={store}>
    <Search />
  </Provider>,
  document.getElementById('app')
)
