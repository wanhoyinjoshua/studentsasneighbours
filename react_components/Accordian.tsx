import React, { useState,useRef} from "react";
import styles from "../styles/Accordian.module.css";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { orange } from "@mui/material/colors";
import Link from 'next/link';
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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className={styles.masterwrapper}>
      <h1>Frequently Asked Questions</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className={styles.font}>What is a speech pathologist?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.font}>
            <ul className={styles.list}>
              <li>
              “Speech pathologists study, diagnose and treat communication disorders, including difficulties with speech, language, fluency and voice. 
They work with people who have difficulty communicating because of developmental delays, stroke, brain injuries, learning disability, intellectual disability, cerebral palsy, dementia and hearing loss, as well as other problems that can affect speech and language. 
People who experience difficulties swallowing food and drink safely can also be helped by a speech pathologist.”

<a href="https://www.speechpathologyaustralia.org.au">(Speech Pathology Australia)</a>
              </li>
              <li>
         
 
              Kids and Cubs Clinic is a paediatric clinic meaning our speech pathologists assess and treat children aged 0 to 16 years old. 

              </li>
            </ul>
         
 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={styles.font}>When should my child see a speech pathologist?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.font}>
            
            <ul>
              <li>
              Your child should see a speech pathologist if:
              </li>
              <ul>
              <li>
            You or others (such as a health professional or teacher) are concerned about their communication skills
            </li>
            <li>
            Your child is not reaching their <a href="/Developmental-Milestones"> communication milestones </a>
            </li>
            <li>
            Your child is demonstrating behavioural problems

            </li>
            <li>
            Your child is not attempting to communicate
            </li>
            <li>
            Your child is having difficulty with learning at preschool or school
            </li>

              </ul>
      



            </ul>
            <ul>
              <li>
              A speech pathologist will be able to assess your child’s skills and determine whether these skills are age-appropriate or not, and can then recommend the next steps. 


              </li>
              <li>
              Contact us today if you have any enquiries or you would like to book in an assessment.
              </li>
            </ul>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.font}>Why isn’t my child talking yet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.font}>
          

<ul>
  <li>
  There are a range of reasons why your child may not be talking yet. If you are concerned please contact us to book an assessment and discuss this further. 

  </li>
  <li>
  If your child has not started talking yet they may be presenting with a speech or language delay. The cause of speech or language delays are usually unknown however it tends to run in families. Up to 1 in 5 children present with a speech and/or language delay.
  </li>
</ul>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography className={styles.font}>Will my child’s communication skills catch up without therapy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.font}>
          


<ul>
  <li>
  If you suspect your child is presenting with a communication delay, contact our clinic now to book in an assessment so we can determine what is going on and discuss recommendations. 

  </li>
  <li>
  Delayed communication often does not “catch up” to an age-appropriate level without therapy. You may find your child’s skills start to develop over time without therapy however there is often still a gap between their current skills and the skills that are considered age-appropriate, meaning there is still a delay. Research tells us that early intervention is best. Therapy outcomes are better achieved when intervention starts earlier, particularly in the very early childhood years (under 3) when a child’s brain is rapidly developing. 
  </li>
  <li>

  It’s never too early to consult a speech pathologist about your concerns! Don’t just “wait and see”.

  </li>
</ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography className={styles.font}>Will preschool or school fix my child’s talking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.font}>
            <ul>
          <li>Preschool and school are excellent educational environments that provide children with many learning opportunities for their development. However, they are not considered a replacement for therapy. In these settings, your child will be exposed to academic learning and a set curriculum that does not directly target the skills your child may require to improve their communication. In fact, it can become a challenging environment for a child with communication delays, as accessing the curriculum relies on a child to have certain skills established. If your child needs help with their talking, it is best to attend therapy as well as attend preschool or school in order to maximise their progress. </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography className={styles.font}>Will speaking more than one language cause a language delay?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.font}>
          


<ul>
  <li>
  No, speaking multiple languages does not cause a language delay. 
  </li>
  <li>
  Children will typically become more fluent in one language than another. Their primary (more fluent) language should be developing at an age-appropriate level no matter how many other languages are spoken. If a language delay is present, it will affect all languages spoken. 

  </li>
  <li>
  It’s important to remember that when children are exposed to a new language, they need 5-7 years of exposure to become fluent in it. 
  </li>
</ul>
          </Typography >
        </AccordionDetails>
      </Accordion>
      

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography className={styles.font}>Why can’t my child say all their sounds correctly when talking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.font}>
        



<ul>
  <li>
  Children cannot produce all of the sounds in speech when they begin talking, and instead develop these sounds over time. A child who says words with incorrect sounds might be producing the word with the correct sounds for their age, or they may be presenting with a form of speech sound delay, depending on the type of error. If you or others are having difficulty understanding your child’s speech it is best to book an assessment to determine whether it is age-appropriate. 
  </li>
  <li>
  As a guide, you should be able to understand all of what your child is saying by 4 years old.

  </li>
  <li>
  You can find more information on the expected <Link href="/Developmental-Milestones">development of speech sounds here</Link> and <Link href="/#contactus">contact us</Link> if you would like to book an assessment!
  </li>
</ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography className={styles.font}>Who should come to the session with my child?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.font}>
        



<ul>
  <li>
  A parent/carer should bring their child to the clinic. We recommend parents/ carers come into the session so they can observe, learn and participate in therapy as appropriate. Best therapy outcomes are typically achieved with repeated, regular practise in a range of contexts (this means continuing to work on goals at home with training from your speech pathologist). 
  </li>
 
</ul>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography className={styles.font}>Do I need a referral?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.font}>
        



<ul>




  <li>
  No, you don’t require a referral to see a speech pathologist at our clinic. 
  </li>
  <li>
  However, you may require a referral from your GP if you would like to use Medicare or Private Health funding options. Please discuss this with your GP or Private Healthcare provider prior to your appointment.
  </li>
 
 
</ul>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography className={styles.font}>How do I make an appointment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.font}>
        



<ul>




  <li>
  If you would like to make an appointment to see a speech pathologist at Kids and Cubs Clinic, feel free to submit an enquiry or <a href="/#contactus">contact us</a>.  


  </li>
 
 
</ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    
    </div>
  );
}
