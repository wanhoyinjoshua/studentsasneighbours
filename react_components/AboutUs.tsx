import React from 'react'
import Image from 'next/image'
import mypic from "../public/Assets/propic.png"
import styles from "../styles/AboutUs.module.css"

const AboutUs = () => {
  return (
    <>

    <h1 className={styles.center}>About Us</h1>
    <div className={styles.masterwrapper}>
        
        <section className={styles.propicwrapper}>
            <div className={styles.imagewrapper}>
                <div className={styles.finalimagewrapper}>
                <Image
                className={styles.finalimagewrapper}
                src={mypic}
                alt="logoheader-kids-and-cubs"
                
      
      
            />

                </div>
          

            </div>
       

        </section>
<br></br>
        <section className={styles.descriptionwrapper}>
            <div className={styles.descriptioncontainer}>

            <h1 className={styles.h1}>
            Samantha Malfitano
            </h1>
            <h2>
            Director and Principal Speech Pathologist
            </h2>
            <h3 className={styles.h3}>
            Certified Practising Speech Pathologist (CPSP)
            </h3>
            <p className={styles.p}>
            Samantha is the director and principal speech pathologist at Kids and Cubs Clinic. She is an experienced paediatric clinician, having previously worked a number of years in a tertiary Sydney hospital to assess and treat children with a range of communication and feeding difficulties. 
            <br></br>
            Samantha has special interests in the clinical areas of complex speech sound disorders and early language development. 
            <br></br>
            <br></br>
            She has received specialised training and mentorship by professors in the area of severe speech sound disorders, and is practiced in providing differential diagnosis, second opinions, and treatment of these complex disorders, such as Childhood Apraxia of Speech and severe phonological disorders. Samantha is also accredited in the Sounds-Write program to treat literacy difficulties, and has attended The Lidcombe Program Consortium training for the treatment of stuttering. 
            <br></br>
            <br></br>
            She is a strong advocate for working collaboratively with the client’s family and alongside their other health professionals as a team. Samantha ensures to provide quality, evidence-based services to her clients in order to reach their goals.


            </p>

            </div>

           

        </section>




    </div>
    </>
  )
}

export default AboutUs