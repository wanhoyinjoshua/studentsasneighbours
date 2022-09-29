
import React,{useState} from "react";

import Navbar from "../react_components/navbar/Navbar";
import Footer from "../react_components/Footer"
import Head from "next/head"
import Milestones from "../react_components/Milestones/Milestones"
import Navbarlink from "../react_components/navbar/Navbarlink";
const Developmental_Milestones = () => {
  const[sidebar,setSidebar]=useState(false)
  function toggle(){
      setSidebar(!sidebar)
  }
  return (
<div>
<Head>
      <title>Developmental Milestones</title>
      <link rel="icon" href="/favicon.ico" />
            <meta charSet="UTF-8" />
            <meta name="description" content="Developmental Milestones-Kids and Cubs Clinic Specch Pathology At 12 months, children can usually:
Understand:
Approximately 10 words
Respond to their name
Recognise greetings
Recognise some familiar people and objects
Make eye contact
Say:
Start to use sounds, gestures and a few words
Babble
Copy sounds or noises"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" /> 
          <meta name="Developmental Milestones-Kids and Cubs Clinic Specch Pathology" content="At 12 months, children can usually:
Understand:
Approximately 10 words
Respond to their name
Recognise greetings
Recognise some familiar people and objects
Make eye contact
Say:
Start to use sounds, gestures and a few words
Babble
Copy sounds or noises" />
          
        </Head>
    <Navbar></Navbar>
      <Navbarlink></Navbarlink>
    <Milestones></Milestones>
    
    
    
    </div>
  )
}

export default Developmental_Milestones