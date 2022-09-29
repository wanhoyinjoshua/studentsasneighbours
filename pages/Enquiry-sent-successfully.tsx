import React from 'react'
import styles from "../styles/IntroPage.module.css"
import { styled } from '@mui/material/styles';
import Button , { ButtonProps }from '@mui/material/Button';
import Link from "next/link"
import Image from 'next/image'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Enquiry_sent_successfully = () => {
    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main:'#fff0f0',
            contrastText:'orange'
            
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#fff0f0',
          }
        }
    }
    )
  return (
    <div className={styles.sucesspage}>
        <div className={styles.sucesspagewrap}>
        <div>Your enquiry was sent successfully!</div>
    <br></br>
    <div>
        We will get back to you as soon as we can!!
    </div>
    <div>
        <div className={styles.finalimagewrappersucess}>
        <Image
                className={styles.finalimagewrappersucess}
                src={"/Assets/beargiff.gif"}
                alt="logoheader-kids-and-cubs"
                width={300}
                height={300}
                
      
      
            />
        </div>
   
         
    </div>
    <ThemeProvider theme={theme}>
         <Link className={styles.buttonsucess} href="/">
         
            <Button className={styles.buttonsucess}variant="contained" >Go to Homepage</Button>
            
            </Link>
            </ThemeProvider>

        </div>
       
  
    </div>
  )
}

export default Enquiry_sent_successfully