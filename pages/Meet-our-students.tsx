import React from 'react'
import Navbar from "../react_components/navbar/Navbar";
import Footer from "../react_components/Footer"
import Navbarlink from "../react_components/navbar/Navbarlink";
import styles from "../styles/privacy.module.css"
const Meetourstudents
 = () => {
  return (
    <div >

<Navbar></Navbar>
    <Navbarlink></Navbarlink>
        
       <div className={styles.main}>
        <div className={styles.videoplayerwrapper}>
        <iframe className={styles.videoplayer} src="https://www.youtube.com/embed/QzGoyDCgfQ8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe className={styles.videoplayer} width="560" height="315" src="https://www.youtube.com/embed/lamY-VNRJMo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>

        </div>
     
       </div>

    </div>
  )
}

export default Meetourstudents
