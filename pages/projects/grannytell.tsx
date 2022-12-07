import React, { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Document, Page } from 'react-pdf';
import Script from "next/script"
import Navbarlink from "../../react_components/navbar/Navbarlink";
import MasterContactForm from "../../react_components/EnquiryForms/ContactFormMaster"
import Funding from "../../react_components/Funding"
import OurServices from "../../react_components/Ourservices/OurServices"
import ServicesAccordian from "../../react_components/ServicesAccordian"
import ResponsiveAppBar from "../../react_components/IntroPage/Intropage"
import Navbar from "../../react_components/navbar/Navbar";
import Footer from "../../react_components/Footer"

import Wordcloud from "../../react_components/IntroPage/Wordcloud"
import Head from "next/head"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { width } from '@mui/system';
import styles from "../../styles/Flipbook.module.css";
const DynamicflipbookWithNoSSR = dynamic(() => import('../../react_components/Flipbook'), {
    ssr: false
});
const grannytell = () => {
   




  

  return (
    <div>  
    <Navbar></Navbar>
     
    <Navbarlink></Navbarlink>
    

    
    <DynamicflipbookWithNoSSR></DynamicflipbookWithNoSSR>

    
    




   
    <Footer></Footer>
    
   </div>
   
  )
}

export default grannytell