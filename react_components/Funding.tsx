import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "../styles/Funding.module.css";

export default function MediaCard() {
  return (
    <>
    <h2 className={styles.center}>Funding</h2>
    <div className={styles.masterwrapper}>

    
    
    <div className={styles.fundingwrapper}>
    <div className={styles.center}>At Kids and Cubs Clinic we accept the following funding options:</div>
    <br></br>
    <div className={styles.mum}>
    <Card style={{margin:"0 auto", border: "none", boxShadow: "none" }} className={styles.cardwrapper1} sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image= "/Assets/NDIS-logo.webp"
        alt="green iguana"
        
      />
      <CardContent>
        <div>
          NDIS 
        </div>
        <div>
          <ul>
            <li>
            Self-managed funding

            </li>
            <li>
            
              Plan-managed funding

            </li>
          </ul>
        </div>
      </CardContent>
      
    </Card>
    <Card style={{ margin:"0 auto",border: "none", boxShadow: "none" }} className={styles.cardwrapper} sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image="/Assets/private.jpg"
        alt="green iguana"
      />
      <CardContent>
        <div>
          Private Health Insurance
        </div>
        <div>
       <ul>
       <li>Please consult your private health provider to determine eligibility and rebate amounts. </li>
        </ul> 
        </div>
      </CardContent>
     
    </Card>
    <Card style={{ margin:"0 auto",border: "none", boxShadow: "none" }} className={styles.cardwrapper1} sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image="/Assets/medicarephoto.webp"
        alt="green iguana"
      />
      <CardContent>
        <div>
          Medicare
        </div>
        <div>
          <ul>
            <li>
            Chronic Disease Management plan (previously known as Enhanced Primary Care plan)


            </li>
            <li>
            Item 135

            </li>
            <li>
            Please discuss Medicare funding options with your GP 
            </li>
            </ul>
        </div>
      </CardContent>
      
    </Card>
    </div>
    </div>
    </div>
    </>
  )
}