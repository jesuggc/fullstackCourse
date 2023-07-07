import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({title}) => <h1> {title} </h1>

const StatisticsLine = ({text,number}) => <div> {text} {number} </div>

const Button = ({text,handleClick}) => <button onClick = {handleClick}> {text} </button>

const Statistics = (props) => {
  if (props.all === 0) return <h2>No feedback given</h2>
  return (
    <div>
      <StatisticsLine text = "good" number = {props.good} />
      <StatisticsLine text = "neutral" number = {props.neutral} />
      <StatisticsLine text = "bad" number = {props.bad} />
      <StatisticsLine text = "all" number = {props.all} />
      <StatisticsLine text = "average" number = {props.average} />
      <StatisticsLine text = "positive" number = {props.positive} />
    </div>
  )
}

const App = () => {
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

  const handleGoodClick = () => setGood(good+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)

  return (
    <div>
      <Title title = {"give feedback"} /> 
      <Button text={"good"} handleClick = {handleGoodClick}/>
      <Button text={"neutral"} handleClick = {handleNeutralClick}/>
      <Button text={"bad"} handleClick = {handleBadClick}/>
     
      <Title title = {"statistics"} /> 
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all()} average = {average()} positive={positive()}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)