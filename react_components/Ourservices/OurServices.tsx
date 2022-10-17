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

            <h2 className={styles.h2}>What is Intergenerational Living</h2>
            <p className={styles.p}>
            Although residential aged care facilities are designed as micro-communities, they inadvertently create living in an age-segregated environment that structurally denies the opportunities for the older adults to socially connect with the younger generation. Intergenerational Live-in Student Programs (ILiSP) were piloted with the aim to provide ongoing long-term contact and enable meaningful engagement of older adults through facilitating genuine and reciprocal relationships between the older and younger generation.

            </p>


            </div>
            
            
            
            </div>
  
    </div>

    


    <div className={styles.cardmasterwrappermiddle}>
    <div className={styles.descriptiontextleft}>
    <div className={styles.textwrapper}>

<h2 className={styles.h2}>Co-curricular opportunity</h2>
<p className={styles.p}>
Participation in co-curricular programmes is widely recognized and promoted as an integral part of the student life experience and forms an extension of formal learning experiences for university students. Students highlighted that participation in ILiSP assisted them to develop professionally, as they gained greater insights into dementia and knowledge related to working in aged care. They also improved their communication with residents living with dementia, their significant others, multidisciplinary staff and/or managers. Many alumni specifically reported that ILiSP involvement supported them in their current employment. 
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

      <h2 className={styles.h2}>The impact of ILisP</h2>
      <p className={styles.p}>
      Students and residents report shared connection and family-like affinity as another upshot of the program’s impact. Both current and past students experience family-like connections. For international live-in students, residents resemble a grandparent figure and provide opportunities to gain advice or learn new skills.  Students also relieve staff members’ carer burden by organising additional activities or providing residents with companionship. Residents, relatives, staff and students feel that more opportunities are created for residents to meaningfully engage as part of the program’s impact. Please refer to the Media Coverage section for more information. 
      </p>


      </div>
      
      
      
      </div>

</div>


    

      


    
    
      
    </div>
    </>
  );
}
