
import { useState, useEffect } from 'react'

// const Display = ({name, value}) => {
//   return(
  
//     <table>
    
//       {name} {value}
      
//     </table>
  
//   )
// }
// const Button = (props) =>{
//   return (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )
// }
// const Statistics = ({bad, neutral, good ,average, all, positive}) =>{
//   if (all===0){
//   return (
//     <p>No feedback given</p>)
//   }
//   else{
//   return(
    
//     <div>
      
//       <Display name="good"    value={good}/>
//       <Display name="neutral" value={neutral}/>
//       <Display name="bad"     value={bad}/>
//       <Display name="all"     value={all}/>
//       <Display name="average" value={average}/>
//       <Display name="positive"value={positive}/>
//     </div>
    
//   )
//   }
// }






// // const Heading = ({title}) =>{
// //   return(
// //     <h1>{title}</h1>
// //   )
// // }

// // const Content =({content}) =>{
// //   return(
// //     <p>{content}</p>
// //   )
// // }

// // const Article =({title, content}) =>{
// //   return(
// //     <div>
// //         <Heading title={title}/>
// //         <Content content={content}/>
      
// //     </div>
// //   )
// // }
  


// const App = () => {
 
//     // save clicks of each button to its own state
//     const [good, setGood] = useState(0)
//     const [neutral, setNeutral] = useState(0)
//     const [bad, setBad] = useState(0)
//     const average = (good*1 + neutral*0 +bad*-1)/(good + neutral + bad);
//     const all = good + neutral + bad;
//     const positive = (good)/(good + neutral + bad)*100;
    
 
//     // const part1= {title1: "coding",
//     //               content1: "coding is fun"}
//     // const part2 ={title2:"hhhhhh",
//     //               content2: "jjjjjjjjjjjjjjjjjjj"}
      
            

  
//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button handleClick={() => setGood(good+1)} text="good" />
//       <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
//       <Button handleClick={() => setBad(bad+1)} text="bad" />
      
//       <h1>statictics</h1>
//       <Statistics
       
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         all={all}
//         average={average}
//         positive={positive}
//        />
      
     

//       {/* <Article
//         title={part1.title1}
//         content={part1.content1}
//         />
//       <Article
//         title={part2.title2}
//         content={part2.content2}
//         /> */}

//     </div>
    
    
//   )
// }

// ---------------------------------------------------1.12-1.14--------------------------------------
const Heading = ({heading}) => {
  return(
    <h1>{heading}</h1>
  )
}

const Display =({anedote,votes}) =>{
  return(
    <div>
       <p>{anedote}</p>
       <p>{votes} votes</p>
    </div>
  );
}


const Button = ({text,handleClick}) =>{
  return (
  <button onClick={handleClick}>{text}</button>
  );
  }



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected]=useState(0);
  const [votes,setVotes]=useState(new Array(anecdotes.length).fill(0));
  const [most,setMost]=useState(0);
  

  useEffect(() => {
    const mostVoted = votes.indexOf(Math.max.apply('null',votes));
    setMost(mostVoted);
  },[votes]);



  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    };


  const handleNext = () => setSelected(Math.floor(Math.random()*anecdotes.length));
  
  const clear = () => {
    setVotes(new Array(anecdotes.length).fill(0))
  }
  return (
    <div>
       
      <Heading heading ="Anecdote of the day"/>
      {anecdotes[selected]}
      <Display anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleNext} text="next annecdote" />
      <Button handleClick={clear} text='clear'/>
      <Heading heading ="Anecdote with most votes"/>
      {anecdotes[most]}
      <Display anecdote={anecdotes[most]} votes={votes[most]} />
     
    </div>
  )
}

export default App

















