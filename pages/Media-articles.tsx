import React from 'react'
import Navbar from "../react_components/navbar/Navbar";
import Footer from "../react_components/Footer"
import Navbarlink from "../react_components/navbar/Navbarlink";
import styles from "../styles/privacy.module.css"


import Microlink from '@microlink/react'

const Mediaarticles = () => {
  return (
    <div >

    <Navbar></Navbar>
        <Navbarlink></Navbarlink>
            
           <div className={styles.mainwrapper}>
            <div className={styles.articlewrapper}>
              <br></br>
              <br></br>
              <br>
              </br>
            <p>Featured on The University of Sydney Newsletter</p>
            <Microlink size='large' url='https://www.sydney.edu.au/news-opinion/news/2019/09/30/what-happens-when-students-call-an-aged-care-facility-home.html' />
            
            <p>Featured on abc news</p>
            <Microlink size='large' url='https://www.abc.net.au/news/2019-09-30/free-rent-to-live-in-a-nursing-home/11534036' />
            <Microlink size='large' url='https://www.abc.net.au/radionational/programs/lifematters/what-happens-when-students-live-in-an-aged-care-facility/11560312' />
            <Microlink size='large' url='https://www.sydney.edu.au/news-opinion/news/2021/11/12/ho-yin--joshua--wan-named-nsw-international-student-of-the-year.html' />
            

           
            </div>
         
           </div>
    
        </div>
  )
}

export default Mediaarticles