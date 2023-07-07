import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({title}) => <h1> {title} </h1>
const Statistics = (props) => {
  return (
    <div>
      good {props.good}<br/>
      neutral {props.neutral}<br/>
      bad {props.bad}<br/>
      all {props.all}<br/>
      average {props.average}<br/>
      positive {props.positive}<br/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = () => good + neutral + bad
  const average = () => {
    if(all()=== 0) return 0;
    return (good-bad)/all()
  } 
  const positive = () => {
    if(all()=== 0) return 0;
    return good/all()
  }

  return (
    <div>
      <Title title = {"give feedback"} /> 
      <button onClick = {() => setGood(good + 1)}> good </button>
      <button onClick = {() => setNeutral(neutral + 1)}> neutral </button>
      <button onClick = {() => setBad(bad + 1)}> bad </button>
      <Title title = {"statistics"} /> 
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all()} average = {average()} positive={positive()}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)