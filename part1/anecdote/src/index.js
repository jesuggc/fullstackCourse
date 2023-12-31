import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleRequest, text}) => <button onClick = {handleRequest}>{text}</button>
  
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVoted] = useState(new Uint8Array(6))
  const [mostVoted, setMostVoted] = useState(0)

  // console.log(Math.round(Math.random()*(anecdotes.length-1)))
  const nextQuote = () => {
    setSelected(Math.round(Math.random()*(anecdotes.length-1)))
    if (vote[selected] > vote[mostVoted]) setMostVoted(selected)
  }  
  const voteQuote = () => { 
    const copy = {...vote}
    copy[selected]++
    setVoted(copy)
    if (vote[selected] > vote[mostVoted]) setMostVoted(selected)
  } 

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br/>
      has {vote[selected]} votes
      <br/>
      <Button handleRequest={voteQuote} text = {"vote"} />
      <Button handleRequest={nextQuote} text = {"next anecdote"} />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[mostVoted]}
      <br/>
      has {vote[mostVoted]} votes
      <br/>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)