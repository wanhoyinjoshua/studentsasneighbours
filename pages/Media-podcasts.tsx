import React from 'react'
import Navbar from "../react_components/navbar/Navbar";
import Footer from "../react_components/Footer"
import Navbarlink from "../react_components/navbar/Navbarlink";
import styles from "../styles/privacy.module.css"


import Microlink from '@microlink/react'

const Mediapodcast = () => {
  return (
    <div >

    <Navbar></Navbar>
        <Navbarlink></Navbarlink>
            
           <div className={styles.mainwrapper}>
            <div className={styles.articlewrapper}>
            <p>Featured on ABC Life Matters -'Like living with 100 grandparents' NSW International Student of the Year Joshua Wan</p>
            <Microlink auto-play="false" muted="true" size='large' url='https://www.abc.net.au/radionational/programs/lifematters/joshua-wan,-nsw-international-student-of-the-year/13656792' />
            

         
           
            

           
            </div>
         
           </div>
    
        </div>
  )
}

export default Mediapodcast