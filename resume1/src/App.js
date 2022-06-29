import { useState, useEffect } from 'react'
const style = {
  paragraph: {marginBottom: 0, marginTop:0}
  
}


const Heading = ({heading}) => {
  return(
    <h1>{heading}</h1>
  )
}



const BasicDetails = ({details}) =>{
  const {fullname,profession,address,email,contactNumber} =details;
  return(
    <div>
     <p style={style.paragraph}><strong> Name: </strong> {fullname}</p>
     <p style={style.paragraph}><strong>Profession: </strong>{profession}</p>
     <p style={style.paragraph}><strong>Address: </strong> {address}</p>
     <p style={style.paragraph}><strong>Email: </strong> {email}</p>
     <p style={style.paragraph}><strong>Contact: </strong> {contactNumber}</p>
      
    </div>
  );
}

const Skills =({skills}) => {
  return(
    <div>
      
        {skills.map(skills =><li>{skills}</li>)}
      
    </div>
  )
}



const WorkExperiences =({workExperiences}) => {
  return workExperiences.map(workExperience =>{
  
  return(
    <div>
      <WorkExperience workExperience={workExperience}/><br></br>
    </div>
  ) 
})
}

const WorkExperience =({workExperience})=> {
  const{position,company,duration,description}= workExperience;
  return(
    <div>
      <p style={style.paragraph}><strong>Position: </strong>{position}</p>
      <p style={style.paragraph}><strong>Company: </strong>{company}</p>
      <p style={style.paragraph}><strong>Adress: </strong>{duration}</p>
      <p style={style.paragraph}><strong>Job Description: </strong>{description}</p>
    </div>
  )
}

const Accomplishments = ({accomplishments}) => {
  return accomplishments.map(accomplishment =>{
    return(
      <div>
        <Accomplishment accomplishment = {accomplishment}/><br></br>
      </div>
    );
  });
  }

const Accomplishment =({accomplishment}) => {
  const {name,awarding} = accomplishment;
  return(
    <div>
      <p style={style.paragraph}><strong>Name of Accomplishment: </strong>{name}</p>
      <p style={style.paragraph}><strong>Awarding organization: </strong>{awarding}</p>
    </div>
  )
}

const Organizations = ({organizations}) => {
  return organizations.map(organization=> {
  return(
    <>
      <Organization organization ={organization}/> <br></br>
    </>
  );
  });
}

const Organization = ({organization}) => {
  const{name,position,duration} = organization;
  return(
    <div>
      <p style ={style.paragraph}><strong>Name of organization: </strong> {name}</p>
      <p style ={style.paragraph}><strong>Position: </strong> {position}</p>
      <p style= {style.paragraph}><strong>Duration of Position: </strong> {duration}</p>
      
    </div>
  )
}

const Educations = ({educations}) => {
  return educations.map(education => {
    return(
      <div>
      <Education education ={education}/> <br></br>
      </div>
    )
})
}



const Education = ({education}) => {
  const{name,level,year}= education;
  return(
    <div>
      <p style ={style.paragraph}><strong>Name of School: </strong>{name}</p>
      <p style ={style.paragraph}><strong>Level of Education: </strong>{level}</p>
      <p style ={style.paragraph}><strong>Year graduated: {year}</strong></p>
    </div>
  )
}
const Button = ({text,handleClick}) =>{
  return (
  <button onClick={handleClick}>{text}</button>
  );
  }


const App = () => {
  const [selected, setSelected]=useState(0);

  const handleNext = () => setSelected(Math.floor(Math.random()*interest.length));

  const basicDetails = 
    {fullname: "Kyle Joshua P. Ronquillo",
    profession: "Software Engineer Intern",
    address: "Iligan City",
    email: "kyle@beautitag.com",
    contactNumber: "09951453786",}

  

  const skills = [
    "HTML",
    "Javascrpt",
    "React",
    "CSS"
  ]

  const workExperiences = [
    {position:"Software Engineer Intern", 
      company:"Beautitag ltd.",
      duration:"June 2022-Present",
      details:"Coding and debugging software applications and experimenting with design elements. I also review other engineer's code,test software, and implement changes and necessary updates."},
    {position:"Game Tester",
      company:"GamoVation B.V",
      duration: "April 2021-May 2021",
      details:"Finding technical issues of the game and reporting when there is a missing rule of the game or when a rules is not working."},
    {position:"Virtual Assistant",
      company:"Upwork",
      duration: "April 2021-May 2022",
      details:"Scheduling meetings and swiping dating applications"}
    ]

    const accomplishments = [
      {name:"MSU-IIT Huawei ICT Skills Competition Top 36", 
        awarding:"Huawei"},
      {name:"Computer Engineering Quiz Bowl Challenge Champion", 
      awarding:"ICPEP"},
      {name:"Computer Engineering Quiz Bowl Challenge Champion", 
      awarding:"ICPEP"},
     ]

    const organizations =[
      {name: "MSU-IIT – Institute of Computer Engineers of the Philippines",
        position:"Year Representative",
        duration:"2019-2021"},
        {name: "Misamis University-Math Club",
        position:"Auditor",
        duration:"2016-2018"},
        {name: "Bootcamp Org",
        position:"CFO",
        duration:"2022-Present"},
        {name: "Bootcamp Org",
        position:"CFO",
        duration:"2022-Present"},
        {name: "Bootcamp Org",
        position:"CFO",
        duration:"2022-Present"}
    ]

    const educations =[
      {name:"Mindanao State University-Iligan Institue of Technology",
        level:"College",
        year:"2018-2022"},
      {name:"Misamis University",
        level:"Senior High School",
        year:"2016-2018"},
      {name:"Misamis University",
        level:"Senior High School",
        year:"2016-2018"},
      {name:"Misamis University",
        level:"Senior High School",
        year:"2016-2018"},
      {name:"Misamis University",
        level:"Senior High School",
        year:"2016-2018"},
      
      
    ]

    const interest =[
      "Basketball",
      "Chess",
      "Anime",
      "Gardening",
      "Coding"
    ]

  
  return (
    <div>
       <Heading heading="Basic Details"/>
       <BasicDetails details = {basicDetails} />
       <Heading heading="Skills"/>
       <Skills skills={skills}/>
       <Heading heading="Work Experience"/>
       <WorkExperiences workExperiences={workExperiences}/>
       <Heading heading="Accomplishments"/>
       <Accomplishments accomplishments={accomplishments}/>
       <Heading heading="Affiliation or Organizations"/>
       <Organizations organizations={organizations}/>
       <Heading heading="Education"/>
       <Educations educations={educations}/>
       <Heading heading ="Interest"/>
       {interest[selected]}<br></br>
       <Button handleClick={handleNext} text="next" />

       

     
    </div>
  )
}

export default App;
