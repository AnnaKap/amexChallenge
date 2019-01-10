import React from 'react'

import {Search} from './components'

const App = props => {
  console.log('app props', props)
  return (
    <div>
      <Search />
    </div>
  )
}

export default App
