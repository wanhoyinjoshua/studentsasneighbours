import React from 'react'
import styles from "../styles/Footer.module.css"
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.footerwrapper}>
      <div className={styles.footersubwrapper}>
      <div className={styles.grid}>
        <div>
        <div className={styles.font}>Kids and Cubs Clinic
            <div className={styles.fontlivia}>SPEECH PATHOLOGY</div></div>
           

        </div>
            
            <section>
            <span>info@kidsandcubsclinic.com.au</span>
            <br></br>
            <span>126/85 Reynolds Street, Balmain NSW 2041 Australia
</span>
<div>Kids and Cubs Clinic Pty Ltd ABN 64105001622</div>
<div>
Copyright © 2022 Kids and Cubs Clinic - All Rights Reserved
</div>
              
            </section>
           
        </div>
      

        <br></br>
        
        <div className={styles.policy}>
   <Link href="/Privacy-Policy"><a>Privacy Policy</a></Link>
   <Link href="/sitemap.xml"><a>Sitemap</a></Link>
       
        <Link href="/Terms-of-Use"><a>Terms of Use</a></Link>

   </div>

      </div>

  
      
        

    </div>
  )
}

export default Footer