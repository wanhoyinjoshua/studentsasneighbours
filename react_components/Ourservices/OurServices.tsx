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
            Kids and Cubs Clinic offers speech pathology assessments for children aged 0-16 years old. 
A speech pathology assessment will investigate any range of concerns regarding your child’s communication and will diagnose any existing communication difficulties. You will be provided with results and outcomes of the assessment as well as a recommended management plan. The length and type of assessment is typically based on your child’s age as well as the skills that are being assessed. 

            </p>


            </div>
            
            
            
            </div>
  
    </div>

    


    <div className={styles.cardmasterwrappermiddle}>
    <div className={styles.descriptiontextleft}>
    <div className={styles.textwrapper}>

<h2 className={styles.h2}>Intervention</h2>
<p className={styles.p}>
Kids and Cubs Clinic provides targeted, evidence-based and individualised intervention. Therapy sessions are provided as 30 minute or 60 minute appointments. Therapy is available either in clinic (face-to-face) or via telehealth (videoconferencing). 
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
      We also offer consultation and training sessions to parents and educational staff (preschools, schools, or other organisations). Enquire with us today if you are interested in this service. 
      </p>


      </div>
      
      
      
      </div>

</div>


    

      


    
    
      
    </div>
    </>
  );
}
