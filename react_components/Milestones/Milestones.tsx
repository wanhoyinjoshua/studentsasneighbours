import React, { useState,useRef} from "react";
import TwelveMonth from "./Age/TwelveMonth";
import EighteenMonths from "./Age/EighteenMonths";
import TwoYears from "./Age/TwoYears";
import ThreeYears from "./Age/ThreeYears";
import FourYears from "./Age/FourYears";
import FiveYears from "./Age/FiveYears";
import styles from "../../styles/Milestone.module.css"
import stylesfooter from "../../styles/Footer.module.css"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

const Milestones = () => {
  const [phase, setPhase] = useState("twelve-months");
  function ShowPhase(string){
    setPhase(string)
}
const ref = useRef(null);
const ref1 = useRef(null);
const ref2 = useRef(null);
const ref3 = useRef(null);
const ref4 = useRef(null);
const ref5 = useRef(null);
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
const handleClick = (section) => {
  console.log("hi")
  section.current.scrollIntoView({behavior: 'smooth'});

}
const [alignment, setAlignment] = React.useState('web');



  return (
    <>
    <div className={styles.masterwrapper}>
    <h1 className={styles.textcenter}>Communication Milestones</h1>
    
    <div className={styles.btncontainer}>
    
    <br></br>

    <div className={styles.milestonebtnwrapper}>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref1)}>12 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref2)}>18 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref3)}>2 years </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref4)}>3 years  </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref5)}>4 years  </Button>
    <Button  size="large" aria-label="large button group" onClick={() => handleClick(ref)}>5 years </Button>
      </div>
   
    </div>
    <div>
    <div  className={styles.orange} ref={ref1}>
    <div className={styles.space}>
    <div className={styles.spaceemptybutton}>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref1)}>12 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref2)}>18 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref3)}>2 years </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref4)}>3 years  </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref5)}>4 years  </Button>
    <Button  size="large" aria-label="large button group" onClick={() => handleClick(ref)}>5 years </Button>
      </div>
    </div>
    <TwelveMonth></TwelveMonth> 
    </div>
    
    <div  ref={ref2}>
    <div className={styles.space}>
    <div className={styles.spaceemptybutton}>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref1)}>12 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref2)}>18 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref3)}>2 years </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref4)}>3 years  </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref5)}>4 years  </Button>
    <Button  size="large" aria-label="large button group" onClick={() => handleClick(ref)}>5 years </Button>
      </div>
    </div>
    <EighteenMonths></EighteenMonths>
    </div>
    <div className={styles.orange} ref={ref3}>
    <div className={styles.space}>
    <div className={styles.spaceemptybutton}>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref1)}>12 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref2)}>18 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref3)}>2 years </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref4)}>3 years  </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref5)}>4 years  </Button>
    <Button  size="large" aria-label="large button group" onClick={() => handleClick(ref)}>5 years </Button>
      </div>
    </div>
    <TwoYears></TwoYears>
    </div>
    <div ref={ref4}>
    <div className={styles.space}>
    <div className={styles.spaceemptybutton}>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref1)}>12 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref2)}>18 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref3)}>2 years </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref4)}>3 years  </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref5)}>4 years  </Button>
    <Button  size="large" aria-label="large button group" onClick={() => handleClick(ref)}>5 years </Button>
      </div>
    </div>
    <ThreeYears></ThreeYears>
    </div>
    
    <div  className={styles.orange} ref={ref5}>
      <div className={styles.space}>
      <div className={styles.spaceemptybutton}>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref1)}>12 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref2)}>18 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref3)}>2 years </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref4)}>3 years  </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref5)}>4 years  </Button>
    <Button  size="large" aria-label="large button group" onClick={() => handleClick(ref)}>5 years </Button>
      </div>
      </div>
    <FourYears></FourYears>

    </div>
    
    <div ref={ref}>
    <div className={styles.space}>
    <div className={styles.spaceemptybutton}>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref1)}>12 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref2)}>18 months </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref3)}>2 years </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref4)}>3 years  </Button>
    <Button size="large" aria-label="large button group"onClick={() => handleClick(ref5)}>4 years  </Button>
    <Button  size="large" aria-label="large button group" onClick={() => handleClick(ref)}>5 years </Button>
      </div>
    </div>
    <FiveYears ></FiveYears>

    </div>
    </div>
    <br>
    
    </br>
<br>
</br>
    <h1 className={styles.textcenter}>Typical Speech Sound Development</h1>
    <div className={styles.milestonetable}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth:100 }} aria-label="caption table">
        
        <TableHead>
          <TableRow>
            <TableCell className={styles.fontlarger}>Age children learn to produce English speech sounds</TableCell>
            <TableCell className={styles.fontlarger} align="right">Speech sounds</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow >
              <TableCell className={styles.fontlarger} component="th" scope="row">
              2 to 3 years
              </TableCell>
              <TableCell className={styles.fontlarger} align="right">p, b, m, d, n, h, t, k, g, w, ng, f, y</TableCell>
             
            </TableRow>

            <TableRow >
              <TableCell className={styles.fontlarger} component="th" scope="row">
              4 years
              </TableCell>
              <TableCell className={styles.fontlarger} align="right">l, j, ch, s, v, sh, z</TableCell>
             
            </TableRow>

            <TableRow >
              <TableCell className={styles.fontlarger}  component="th" scope="row">
              5 years
              </TableCell>
              <TableCell className={styles.fontlarger}  align="right">r, zh, th (voiced)</TableCell>
             
            </TableRow>

            <TableRow >
              <TableCell className={styles.fontlarger} component="th" scope="row">
              6 years
              </TableCell>
              <TableCell className={styles.fontlarger}  align="right">th (voiceless)</TableCell>
             
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>

<br>
</br>
<br></br>
    <div className={styles.referencecontainer}>
      <h2>References</h2>
      <p>
      Speech Pathology Australia. (2022). Communication Milestones. Retrieved from https://www.speechpathologyaustralia.org.au on 26/07/2022. 
Centers for Disease Control and Prevention (CDC). (2022). Milestones. Retrieved from https://www.cdc.gov/ on 26/07/2022.

      </p>
      <p>
      McLeod, S. & Crowe, K. (2018). Children’s consonant acquisition in 27 languages: A cross-linguistic review. American Journal of Speech-Language Pathology. doi:10.1044/2018_AJSLP-17-0100. Available from: https://ajslp.pubs.asha.org/article.aspx?articleid=2701897 
      </p>
      
      <p>
      Bowen, C. (1998). Ages and Stages Summary: Language Development 0-5 years. Retrieved from http://www.speech-language-therapy.com/ on 26/07/2022
      </p>


    </div>





    <div className={stylesfooter.footerwrapper}>
      <div className={stylesfooter.footersubwrapper}>
      <div className={stylesfooter.grid}>
        <div>
        <div className={stylesfooter.font}>Kids and Cubs Clinic
            <div className={stylesfooter.fontlivia}>SPEECH PATHOLOGY</div></div>
           

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
        
        <div className={stylesfooter.policy}>
   <Link href="/Privacy-Policy"><a>Privacy Policy</a></Link>
   <Link href="/sitemap.xml"><a>Sitemap</a></Link>
       
        <Link href="/Terms-of-Use"><a>Terms of Use</a></Link>

   </div>

      </div>

  
      
        

    </div>

    </div>

    






    </>
    
  )
}

export default Milestones