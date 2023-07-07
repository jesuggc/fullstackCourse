import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({title}) => <h1> {title} </h1>
// const Button = ({handleClick, text}) => {
//   return (
//     <button onClick = {handleClick}> {text} </button>
//   )
// } 


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const setValue = value => {

  // }

  return (
    <div>
      <Title title = {"give feedback"} /> 
      <button onClick = {() => setGood(good + 1)}> good </button>
      <button onClick = {() => setNeutral(neutral + 1)}> neutral </button>
      <button onClick = {() => setBad(bad + 1)}> bad </button>
      <Title title = {"statistics"} /> 
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}<br/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)