import React, { useState,useRef} from "react";
import styles from "../../styles/ourservices.module.css";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { orange } from "@mui/material/colors";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Image from 'next/image'
import mypic from "../../public/Assets/pictures/students.webp"

import interventionpic from "../../public/Assets/pictures/don.webp"
import trainingpic from "../../public/Assets/pictures/dd.webp"
import "animate.css/animate.min.css";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion  square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '& .MuiButtonBase-root.Mui-expanded': {
    backgroundColor: '#fff3e0'
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
    
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function OurServices() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
       
    <h1 className={styles.OurServices}>Our Services</h1>
    <div className={styles.ourservicewrapper}>
      
    

      <div className={styles.cardmasterwrapper}>

      <div className={styles.descriptionphoto}>
          
        
    
      <Image
                className={styles.image}
                src={mypic}
                alt="logoheader-kids-and-cubs"
                layout="responsive"
                
      
      
            />
            </div>
            
          <div className={styles.descriptiontext}>
            <div className={styles.textwrapper}>

            <h2 className={styles.h2}>Assessment</h2>
            <p className={styles.p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </p>


            </div>
            
            
            
            </div>
  
    </div>

    


    <div className={styles.cardmasterwrappermiddle}>
    <div className={styles.descriptiontextleft}>
    <div className={styles.textwrapper}>

<h2 className={styles.h2}>Intervention</h2>
<p className={styles.p}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>


</div>
      
      </div>
<div className={styles.descriptionphotomiddle}>
    
  

<Image
          className={styles.image}
          src={interventionpic}
          alt="logoheader-kids-and-cubs"
          layout="responsive"
          


      />
      </div>
    

</div>






<div className={styles.cardmasterwrapper}>

<div className={styles.descriptionphoto}>
    
  

<Image
          className={styles.image}
          src={trainingpic}
          alt="logoheader-kids-and-cubs"
          layout="responsive"


      />
      </div>
    <div className={styles.descriptiontext}>
      <div className={styles.textwrapper}>

      <h2 className={styles.h2}>Consultation and Training</h2>
      <p className={styles.p}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>


      </div>
      
      
      
      </div>

</div>


    

      


    
    
      
    </div>
    </>
  );
}
