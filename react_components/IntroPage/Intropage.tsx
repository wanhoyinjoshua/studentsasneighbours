import React, { useState,useEffect  } from "react";

import styles from "../../styles/IntroPage.module.css"
import { styled } from '@mui/material/styles';
import Button , { ButtonProps }from '@mui/material/Button';

import Image from 'next/image'
import mypic from "../../public/Assets/pictures/pat.webp"
import logo from "../../public/Assets/Kidsandcubslogo.svg"
import puzzle from"../../public/Assets/Late talking.svg"
import { orange,grey } from '@mui/material/colors';


const ResponsiveAppBar = () => {
    //navbar
    


    //endnavbar
    const [hover, setHover] = useState(false);
    const onHover = () => {
      setHover(!hover);
    };

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
      color: theme.palette.getContrastText(grey[400]),
      backgroundColor: grey[10],
      '&:hover': {
        
        color: theme.palette.getContrastText(orange[900])
      },
    }));


  return(
    <div>
      
    <div className={styles.container}>
   
    <section className={styles.HeroContentL}>
        <h1 className={styles.homeopagetitle}>
          Integerational  <br></br>
          Live-in Student program 
          
          </h1>
        <h2 className={styles.h2}>
        Promoting healthy aging

          
         
          </h2>
        
        
       
        
      </section>
   
     
      <section className={styles.HeroContentR}>
        <div className={styles.imagebla}>
  
      <Image
              className={styles.imageblachild}
              src={mypic}
              layout="fill"
              objectFit="cover"
            
              priority
             
              
              

              alt="Home-page-coverpage-girl-happy"
              
              
            />
        
 
           
       </div>
    

      </section>
    </div>
<br></br>
<br></br>
<br></br>

    
   
  </div>
  )
};
export default ResponsiveAppBar;
