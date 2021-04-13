import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <div>
    <h1>{course.name}</h1>
    </div>
  )
}

const Total = ({ course }) => {
console.log(course)
  const result = course.parts.map(part => part.exercises);
  const sum = result.reduce((accumulator, currentValue) => accumulator + currentValue);
  return(
    <p>Total of exercises {sum}</p>
  ) 
}

const Part = (props) => {
   console.log(props, "props"); 
  return (
   props.part.parts.map(part => 
    <ul key={part.id}>
    {part.name} {part.exercises}
    </ul>
   ))
}

const Content = ({ course }) => {
  return (
    <div>
    <Part part={course}/>
    </div>
  )
}
const Course = ({course}) => {
  return (
    <div>
      <Header course={course[0]} />
      <Content course={course[0]} />
      <Total course={course[0]} />
      <Header course={course[1]} />
      <Content course={course[1]} />
      <Total course={course[1]} />
    </div> 
  )
}

const App = () => {
  const course = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id:2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
  ]
    return (
      <div>
        <Course course={course}/>
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
export default App;

/* const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {

  const result = course.parts.map(part => part.exercises);
  const sum = result.reduce((accumulator, currentValue) => accumulator + currentValue);
  return(
    <p>Total of exercises {sum}</p>
  ) 
}

const Part = ({course}) => {
  return (
    <p>{course}</p>
     <p>
      {props.part.name} {props.part.exercises}
    </p>     
  )
}

const Content = ({ course }) => {
  console.log(course, "content")
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
      <Part part={course.parts[3]} />
    </div>
  )
}
const Course = ({course}) => {
  return (
    <div>
      <Header course={course[0]} />
      <Content course={course[0]} />
      <Total course={course[0]} />
    </div> 
  )
} */