import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
  </div> 
  )
}

const Part = (props) => {
  return (
    <p>
        {props.content.name} {props.content.exercises}
    </p>
  )
}

const Content = ({contents}) => {
  return (
    <div>
      {contents.map(p => (
        <Part key = {p.id} content = {p}/>
      ))}
    </div>
    )
}

const Total = (props) => {
  let sum = 0
  props.content.forEach(e  => {
    sum+= e.exercises;
  });
  return (
    <p>
        Number of exercises: {sum}
    </p>
    )
}

const App = () => {
  const course =  {
    name: 'Half Stack application development',
    parts: [
    {
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3,
      name: 'State of a component',
      exercises: 14
    },
    {
      id: 4,
      name: 'Redux',
      exercises: 11
    }
  ]
}

  return (
    <div>
      <Header course={course.name}/> 
      <Content contents ={course.parts} />
      <Total content = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))