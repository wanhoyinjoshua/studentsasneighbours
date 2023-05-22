import React from 'react'
import styles from "../styles/Footer.module.css"
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.footerwrapper}>
      <div className={styles.footersubwrapper}>
      <div className={styles.grid}>
        <div>
        <div >Integeratonal Live-in Student program
            <div className={styles.fontlivia}>Promoting Healthy Aging</div></div>
           

        </div>
            
            <section>
            <span>studentsasneighbours@outlook.com</span>
            <br></br>
      


              
            </section>
           
        </div>
      

        <br></br>
        
        <div className={styles.policy}>
   
  
       
      

   </div>

      </div>

  
      
        

    </div>
  )
}

export default Footer