import React from 'react'
import styles from "../../styles/IntroPage.module.css"
import { styled } from '@mui/material/styles';
import Button , { ButtonProps }from '@mui/material/Button';

import Image from 'next/image'
import { TagCloud } from 'react-tagcloud'
const data = [
  { value: 'Using short sentences', count: 100 },
  { value: 'Difficulty reading', count: 90},
  
  { value: 'Fussy eating', count: 20 },
  { value: 'Late talking', count: 1000 },
  { value: 'Using short sentences', count: 100 },
  { value: 'Difficulty reading', count: 90},
  { value: 'Speech sound disorders', count: 800 },
  { value: 'Childhood Apraxia of Speech', count: 80 },
  { value: 'Difficulty spelling', count: 70 },
  { value: 'Stuttering', count: 300 },
  { value: 'Difficulty understanding instructions', count: 200},
 
  { value: 'Language delays', count: 600 },
  { value: 'Lisps', count: 500 },
  { value: 'Incorrect grammar', count: 400 },
  

]
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Wordcloud = () => {
  return (
    <section className={styles.wordmapmasterwrapper}>
<div className={styles.wordmapwrapper}>
    <div className={styles.wordmapvector} >
        Kids and Cubs Clinic is a private speech pathology practice located in Inner-West Sydney. We provide services to children aged 0 to 16 years for the following concerns:
    </div>
<br></br>
    <div className={styles.cloud}>

      <p className={styles.font2rem} style={{paddingLeft:"20vw"}}>Childhood Apraxia of Speech</p>

      <p style={{paddingLeft:"20vw"}} className={[styles.middle,styles.font2rem].join(" ")}>Difficulty understanding instructions</p>
      <p style={{paddingLeft:"15vw"}}>Using short sentences</p>
      <span  className={styles.row}>
      <p className={[styles.font4rem,styles.yellow].join(" ")}style={{paddingLeft:"7vw" }}>Late talking</p>
      <p className={styles.font3rem}style={{paddingRight:"15vw"}}>Stuttering</p>

      </span>
      
      <p className={[styles.middle].join(" ")}>Language delays</p>
      <span className={styles.row}>
      <p style={{paddingLeft:"6vw"}}>Difficulty spelling</p>
      <p style={{paddingRight:"10vw"}}>Lisps</p>
      </span>
      
      <p className={[styles.font4rem,styles.middle,styles.purple].join(" ")} style={{paddingLeft:"6vw"}} >Speech sound disorders</p>
      <span className={styles.row}>
      <p style={{paddingLeft:"15vw"}}>Difficulty reading</p>
      <p style={{paddingRight:"7vw"}}>Fussy eating</p>

      </span>
   
      <p style={{paddingLeft:"50vw"}}>Incorrect Grammar</p>


     
      
      
      
    </div>




    </div>

</section>
  )
}

export default Wordcloud