
import CustomizedAccordions from "../react_components/Accordian"
// index.js
import Footer from "../react_components/Footer"
import React,{useState} from "react";
import Head from "next/head"
import Navbar from "../react_components/navbar/Navbar";
import Navbarlink from "../react_components/navbar/Navbarlink";
const Frequently_asked_questions = () => {
    const[sidebar,setSidebar]=useState(false)
    function toggle(){
        setSidebar(!sidebar)
    }
  return (
    <>
         <Head>
      <title>Frequently Asked Questions</title>
      <link rel="icon" href="/favicon.ico" />
            <meta charSet="UTF-8" />
            <meta name="description" content="“Speech pathologists study, diagnose and treat communication disorders, including difficulties with speech, language, fluency and voice. They work with people who have difficulty communicating because of developmental delays, stroke, brain injuries, learning disability, intellectual disability, cerebral palsy, dementia and hearing loss, as well as other problems that can affect speech and language. People who experience difficulties swallowing food and drink safely can also be helped by a speech pathologist.” Speech Pathology Australia (https://www.speechpathologyaustralia.org.au)
Kids and Cubs Clinic is a paediatric clinic meaning our speech pathologists assess and treat children aged 0 to 16 years old"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" /> 
          <meta name="Frequently Asked Questions-Kids and Cubs Clinic Specch Pathology" content="“Speech pathologists study, diagnose and treat communication disorders, including difficulties with speech, language, fluency and voice. They work with people who have difficulty communicating because of developmental delays, stroke, brain injuries, learning disability, intellectual disability, cerebral palsy, dementia and hearing loss, as well as other problems that can affect speech and language. People who experience difficulties swallowing food and drink safely can also be helped by a speech pathologist.” Speech Pathology Australia (https://www.speechpathologyaustralia.org.au)
Kids and Cubs Clinic is a paediatric clinic meaning our speech pathologists assess and treat children aged 0 to 16 years old.



















" />
          
        </Head>
    <Navbar></Navbar>
    <Navbarlink></Navbarlink>
    <CustomizedAccordions></CustomizedAccordions>
    <Footer></Footer>
    </>
  )
}

export default Frequently_asked_questions