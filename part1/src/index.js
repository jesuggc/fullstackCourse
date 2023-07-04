import React from 'react'
import ReactDOM from 'react-dom'

const now = new Date()

const App = () => ( 
  <div>
    <p>Hello world, its {now.toString()}</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root')) 