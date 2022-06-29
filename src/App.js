import { useState } from 'react'
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }
// const Header = (props) => {
//   console.log(props)
//   return(
//   <div> <h1>{props.course.name}</h1> </div>)
  
 
// }

// const Content = (props) => {
//   return (
//     <>
//       <p>
//           {props.parts }, {props.number}

//       </p>
//     </>
//   )
// }

// -----------------------------------PartB---------------------------------------------------
// const Part = (props)=>{
//   return(
//     <>
//       {props.name}, {props.exercises}
  
    
    
//     </>
//   )
// }
// const Content = (props) => {
//   return (
//     <div>
//       <Part  name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} /><br></br>
//       <Part  name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} /><br></br>
//       <Part  name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
//     </div>
//   )
// }


// const Total = (props) => {
//   return (
//     <>
//       <p>
//           {props.total}
//       </p>
//     </>
//   )
// }
// const App = () => {
  
//     const course = {
//       name: 'Half Stack application development',
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7
//         },
//         {
//           name: 'State of a component',
//           exercises: 14
//         }
//       ]
//     }

 
 

//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//       <Total total={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises} />
//     </div>
//   )
// }


// -----------------------------------------------------------Part C----------------------------------------

// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p><p>So you were probably born in {bornYear()}</p></p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }



// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
  
//   const setToZero = () => setCounter(0)
  
    
//   return (
//     <div>
//     <div>{counter}</div>
//     <button onClick={increaseByOne}>
//   plus
// </button>
    
// <button onClick={setToZero}> 
//     zero
//   </button>
// </div>
  
//   )
  
//   }

// const Display = ({ counter }) => <div>{counter}</div>

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//        <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />           
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />     
         
//     </div>
//   )
// }

// ---------------------------------PartD-------------------------------
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () =>
//   setClicks({ ...clicks, left: clicks.left + 1 })

// const handleRightClick = () =>
//   setClicks({ ...clicks, right: clicks.right + 1 })

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }
// ------------------Handling Arrays-------------

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
  
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// ----------------------Function that returns a function-----------------------------
// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={() => setToValue(1000)}>
//         thousand
//       </button>
//       <button onClick={() => setToValue(0)}>
//         reset
//       </button>
//       <button onClick={() => setToValue(value + 1)}>
//         increment
//       </button>
//     </div>
//   )
// }

// ------------------------Passing event Handlers to Child Components-------------------------
// This is the right place to define a component
// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = newValue => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   // Do not define components inside another component
//   const Display = props => <div>{props.value}</div>

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }


const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}





export default App



