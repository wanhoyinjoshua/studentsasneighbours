import React from 'react'

import Navbarlink from "../react_components/navbar/Navbarlink";
import MasterContactForm from "../react_components/EnquiryForms/ContactFormMaster"
import Funding from "../react_components/Funding"
import OurServices from "../react_components/Ourservices/OurServices"
import ServicesAccordian from "../react_components/ServicesAccordian"
import ResponsiveAppBar from "../react_components/IntroPage/Intropage"
import Navbar from "../react_components/navbar/Navbar";
import Footer from "../react_components/Footer"
import styles from "../styles/Home.module.css"
import Wordcloud from "../react_components/IntroPage/Wordcloud"
import Head from "next/head"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const index = () => {
  return (
    <div>
      <Head>
      <title>Integeratonal
Live-in Student program</title>
      <link rel="icon" href="/favicon.ico" />
      
            <meta charSet="UTF-8" />
            <meta name="description" content="Integeratonal
Live-in Student program
Promoting healthy aging
"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" /> 
          <meta name="Kids and Cubs Clinic Specch Pathology" content="Integeratonal
Live-in Student program
Promoting healthy aging
" />
          
        </Head>
              <style jsx>{`
         
          body{
            margin:0;
            padding:0;
            
            
          }
        
          `}</style>
    
        
        <Navbar></Navbar>
     
        <Navbarlink></Navbarlink>
       
        <ResponsiveAppBar></ResponsiveAppBar>
  
        

        <div className={styles.space} id="Our-Services"></div>
        <AnimationOnScroll animateIn="animate__animated animate__fadeIn">
        <OurServices></OurServices>
        
        </AnimationOnScroll>
        
        <br></br>
        
       

       
   


        <Footer></Footer>
        
            
            
            
        </div>
  )
}

export default index