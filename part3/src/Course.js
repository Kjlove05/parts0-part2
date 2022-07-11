import React from 'react';


const Header = ({heading}) => {
  return(
    <h1>
      {heading}
    </h1>
    
  )
}

const Contents = ({parts}) =>{
 return parts.map(part => {
  return (
    <div key={part.id}>
      <Parts parts={part}/>
    </div>
  )
 })
}

const Parts = ({parts}) =>{
const{name,exercises} =parts;
  return(
   
    <p>{name} {exercises}</p>
    
  )
}
const Total = ({parts}) => {
  const total = parts.reduce((previousTotal, currentTotal) => previousTotal + currentTotal.exercises, 0)
  return (
    <div>
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}


const Course = ({course}) =>{
      return (
        <div>
       <Header heading={course.name} />
       <Contents parts={course.parts}/>
       <Total parts={course.parts}/>
       

       
       </div>
       )
      }

export default Course;
