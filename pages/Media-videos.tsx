import React from 'react'
import Navbar from "../react_components/navbar/Navbar";
import Footer from "../react_components/Footer"
import Navbarlink from "../react_components/navbar/Navbarlink";
import styles from "../styles/privacy.module.css"
const Mediavideos = () => {
  return (
    <div >

    <Navbar></Navbar>
        <Navbarlink></Navbarlink>
            
           <div className={styles.main}>
            <div className={styles.videoplayerwrapper}>
            <iframe className={styles.videoplayer} width="560" height="315" src="https://www.youtube.com/embed/IGKdsl7DI-A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>Featured in Korean local https://www.youtube.com/embed/gwYfZpyqPTomedia</p>
            <iframe  className={styles.videoplayer} width="560" height="315" src="https://www.youtube.com/embed/gwYfZpyqPTo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>Live-in Student awarded International student of the year award 2021 NSW</p>
            </div>
         
           </div>
    
        </div>
  )
}

export default Mediavideos