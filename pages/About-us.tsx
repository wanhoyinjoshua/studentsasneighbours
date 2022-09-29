import React from 'react'
import Navbar from "../react_components/navbar/Navbar";
import AboutUs from "../react_components/AboutUs";
import Footer from "../react_components/Footer"
import Head from "next/head"
import Navbarlink from "../react_components/navbar/Navbarlink";

const AboutUspage = () => {
  return (
    <>
       <Head>
      <title>About Us</title>
      <link rel="icon" href="/favicon.ico" />
            <meta charSet="UTF-8" />
            <meta name="description" content="Samantha Malfitano is the director and principal speech pathologist at Kids and Cubs Clinic. She is an experienced paediatric clinician, having previously worked a number of years in a tertiary Sydney hospital to assess and treat children with a range of communication and feeding difficulties."/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" /> 
          <meta name="About Us-Kids and Cubs Clinic Specch Pathology" content="Samantha Malfitano is the director and principal speech pathologist at Kids and Cubs Clinic. She is an experienced paediatric clinician, having previously worked a number of years in a tertiary Sydney hospital to assess and treat children with a range of communication and feeding difficulties." />
          
        </Head>
    <Navbar></Navbar>
    <Navbarlink></Navbarlink>
    
    <AboutUs></AboutUs>
    <Footer></Footer>
    </>
  )
}


export default AboutUspage