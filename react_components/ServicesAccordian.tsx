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
import { orange, grey } from "@mui/material/colors";

import Image from 'next/image'
import mypic from "../public/Assets/propic.jpg"


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';





interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
    
    const ExpandMore = styled((props: ExpandMoreProps) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));
    
    export default function RecipeReviewCard() {
      const [expanded, setExpanded] = React.useState(false);
      const [expanded2, setExpanded2] = React.useState(false);
      const [expanded3, setExpanded3] = React.useState(false);
      const [expanded4, setExpanded4] = React.useState(false);
      const [expanded5, setExpanded5] = React.useState(false);
      const [expanded6, setExpanded6] = React.useState(false);
    
      const handleExpandClick = (expanded,setExpanded) => {
        setExpanded(!expanded);
      };
  return (
    <div className={styles.masterwrapper}>
      <h1 className={styles.master}>We provide services for the following:</h1>
      <section className={styles.grid}>

        <div className={styles.gridrow}>

        <Card className={styles.card} style={{border:"none",boxShadow: "none"}} sx={{ maxWidth: 400,minWidth:300 }}>
      
      <CardMedia
        component="img"
        height="194"
        image="/Assets/language.webp"
        alt="language-photo-girl-playing-with toys"
      />
      <CardContent>
        
      </CardContent>
      <CardActions disableSpacing>
      <Typography className= {styles.fontsize}variant="body2" color="text.primary">
      Language
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={()=>handleExpandClick(expanded,setExpanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" >
        <CardContent>
          
          <Typography align="left" paragraph>
          Receptive language refers to a child’s ability to understand different words, sentences and instructions. Expressive language refers to a child’s ability to say words, and produce sentences with the correct grammar, meaning and word order. Pragmatic language refers to the social language skills we use in our daily interactions with others. 
          </Typography>
     
        </CardContent>
      </Collapse>
    </Card>

    <Card   style={{border:"none",boxShadow: "none"}} className={styles.card}  sx={{ maxWidth: 400,minWidth:300 }}>
      
      <CardMedia
        component="img"
        height="194"
        image="/Assets/literacy.webp"
        alt="literacy-girl-reading-book-on-the-floor"
      />
      <CardContent>
        
      </CardContent>
      <CardActions disableSpacing>
      <Typography  className= {styles.fontsize}variant="body2" color="text.primary">
      Pre-literacy and Literacy
        </Typography>
        <ExpandMore
          expand={expanded2}
          onClick={()=>handleExpandClick(expanded2,setExpanded2)}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded2} timeout="auto" >
        <CardContent>
        <Typography align="left" paragraph>Pre-literacy refers to a group of skills required in order for a child to be ready to read. These skills can include identifying letters and sounds, phonological awareness skills such as syllabification, and awareness of print concepts such as holding a book the right way up. </Typography>
        <Typography align="left" paragraph>
          Literacy refers to the language and decoding skills required for reading, spelling and writing. 
          </Typography>
     
        </CardContent>
      </Collapse>
    </Card>

    <Card   style={{border:"none",boxShadow: "none"}} className={styles.card}  sx={{ maxWidth: 400,minWidth:300 }}>
      
      <CardMedia
        component="img"
        height="194"
        image="/Assets/speechsounds.webp"
        alt="speech-sounds-girl-singing"
      />
      <CardContent>
        
      </CardContent>
      <CardActions disableSpacing>
      <Typography  className= {styles.fontsize} variant="body2" color="text.primary">
      Speech Sounds
        </Typography>
        <ExpandMore
          expand={expanded3}
          onClick={()=>handleExpandClick(expanded3,setExpanded3)}
          aria-expanded={expanded3}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded3} timeout="auto" >
        <CardContent>
          
        <Typography align="left" paragraph>
          Speech sounds refer to a child’s ability to produce the correct sounds in their words. There are different types of speech sound disorders which can affect your child’s speech. These can include but are not limited to lisps, phonological disorders, or Childhood Apraxia of Speech. It is crucial that the type of speech sound disorder is diagnosed correctly in order for treatment to be most effective.
          </Typography>
     
        </CardContent>
      </Collapse>
    </Card>

        </div>
  


<div className={styles.gridrow}>

<Card  style={{border:"none",boxShadow: "none"}}  className={styles.card}  sx={{ maxWidth: 400,minWidth:300  }}>
      
      <CardMedia
        component="img"
        height="194"
        image="/Assets/stuttering.webp"
        alt="stuttering"
      />
      <CardContent>
        
      </CardContent>
      <CardActions disableSpacing>
      <Typography  className= {styles.fontsize} variant="body2" color="text.primary">
      Stuttering
        </Typography>
        <ExpandMore
          expand={expanded4}
          onClick={()=>handleExpandClick(expanded4,setExpanded4)}
          aria-expanded={expanded4}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded4} timeout="auto" >
        <CardContent>
    
        <Typography align="left" paragraph>
          Stuttering refers to the involuntary repetitions or pauses in speech. Stuttering can present as sound, syllable or whole-word repetitions (e.g. “Can I… can I… can I….?”), and/or pauses with and without audible airflow. These features can also be accompanied by other behaviours such as use of filler words in speech (e.g. “um”), or blinking.
          </Typography>
     
        </CardContent>
      </Collapse>
    </Card>


    <Card  style={{border:"none",boxShadow: "none"}} className={styles.card}  sx={{ maxWidth: 400 ,minWidth:300}}>
      
      <CardMedia
        component="img"
        height="194"
        image="/Assets/voice.webp"
        alt="voice coaching"
      />
      <CardContent>
        
      </CardContent>
      <CardActions disableSpacing>
      <Typography className= {styles.fontsize} variant="body2" color="text.primary">
      Voice
        </Typography>
        <ExpandMore
          expand={expanded5}
          onClick={()=>handleExpandClick(expanded5,setExpanded5)}
          aria-expanded={expanded5}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded5} timeout="auto" >
        <CardContent>
         
        <Typography align="left" paragraph>
          Your child could have a voice problem if they experience a hoarse, husky or strained voice, or a voice that is too soft to be heard easily. 
          </Typography>
     
        </CardContent>
      </Collapse>
    </Card>


    
    <Card  style={{border:"none",boxShadow: "none"}} className={styles.card}  sx={{ maxWidth: 400 ,minWidth:300}}>
      
      <CardMedia
        component="img"
        height="194"
        image="/Assets/fussyeating.webp"
        alt="fusy eating"
      />
      <CardContent>
        
      </CardContent>
      <CardActions disableSpacing>
      <Typography className= {styles.fontsize}variant="body2" color="text.primary">
      Fussy Eating
        </Typography>
        <ExpandMore
          expand={expanded6}
          onClick={()=>handleExpandClick(expanded6,setExpanded6)}
          aria-expanded={expanded6}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded6} timeout="auto" >
        <CardContent>
          
        <Typography align="left" paragraph>
          Fussy eating can present as restricted food preferences. These preferences can affect eating different food groups, tastes, shapes, colours and textures. 
          </Typography>
     
        </CardContent>
      </Collapse>
    </Card>


</div>
    


      </section>
  
      
    </div>
  );
}
