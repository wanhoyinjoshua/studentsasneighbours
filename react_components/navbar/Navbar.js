
import React,{useState} from 'react'
import styles from "../../styles/Navbar.module.css"
import Image from 'next/image'
import mypic from "../../public/Assets/heart.png"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Button , { ButtonProps }from '@mui/material/Button';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

const Navbar = () => {

const[sidebar,setSidebar]=useState(false)
const[loading,setLoading]=useState(false)
function toggle(){
  
    setSidebar(!sidebar)

   
    
}
function togglecolor(){
  setSidebar(!sidebar)
  setColor('secondary')
  
}


const [hover, setHover] = useState(false);
const onHover = () => {
  setHover(!hover);
};

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main:'#fdc11c',
      contrastText:'#fff'
      
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#fff0f0',
    },
  },
});
const [color, setColor] = useState('primary')
  return (
    <>

{sidebar && 
<div className='overlay'>

<style jsx>{`
           .overlay{
            background: black;
  height: 100%;
  position: absolute;
  top:0;
  position:fixed;
 

  z-index: 90;
  width: 100vw;
  height: 100vh;
  
  
  @media screen and (min-width: 500px) {
    display: none;
  }
            opacity: ${sidebar? "60%":"0"};
            left:${sidebar? "0":"-100%"};
           
        
        
          `}</style>

          <div className={styles.closebutton}>
            button
          </div>
  
  
  
  </div>}
           <div className='sidebar'>
        <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&display=swap');
        
        @font-face {
          font-family: 'OpenSans';
          src: url('../../public/Assets/Fonts/Bryndan_Write.ttf');
          
          font-weight: 400;
          font-style: normal;
          }
           .sidebar{
            
            
            background: white;
 
  /* margin-top:-80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  
  display: grid;
  align-items: center;

  z-index: 9000;
  width: 100vw;
  
  margin-bottom:-2vh;
  height: 100vh;
  transition: 0.3s ease-in-out;
  bottom:0;
  
  
            opacity: ${sidebar? "100%":"0"};
            top:${sidebar? "0":"-100%"};
           
        
        
          `}</style>
          
          
          <section className={styles.sidebarcontent}>
          < CloseIcon className={styles.closeicon} onClick={toggle} fontSize={"large"} ></CloseIcon>
          
          <section className={styles.sidepanel}>
         

          
         
          <div className={styles.links}>

          <Link   onClick={toggle}href="https://grannytell.herokuapp.com/">
          
                  <a color={color} className={styles.buttonmobile} onClick={togglecolor} >Granytell</a>
                  
              </Link>
              <div className={styles.seperator}>
          <Divider    />
          </div>
              
          <Link   onClick={toggle}href="https://www.tandfonline.com/doi/abs/10.1080/13607863.2022.2098910?journalCode=camh20">
          
                  <a color={color} className={styles.buttonmobile} onClick={togglecolor} >Research Paper</a>
                  
              </Link>
          <div className={styles.seperator}>
          <Divider    />
          </div>
              
              <Link  onClick={toggle} href="/Meet-our-students">
              
              <a className={styles.buttonmobile} onClick={toggle} >Meet our students - Video introduction</a>
              
              </Link>
              <div className={styles.seperator}>
          <Divider     />
          </div>
              

              
              <Link  onClick={toggle} href="/Media-videos">
              
              <a  className={styles.buttonmobile} onClick={toggle} >Media Coverage- Videos</a>
              
              </Link>
              <div className={styles.seperator}>
          <Divider    />
          </div>
           
             
          <Link  onClick={toggle} href="/Media-articles">
              
              <a  className={styles.buttonmobile} onClick={toggle} >Media Coverage- Articles</a>
              
              </Link>
              <div className={styles.seperator}>
          <Divider    />
          </div>
           
          <Link  onClick={toggle} href="/Media-podcast">
              
              <a  className={styles.buttonmobile} onClick={toggle} >Media Coverage- Podcast</a>
              
              </Link>
              <div className={styles.seperator}>
          <Divider    />
          </div>
              
             <div className={styles.seperator}></div>
  
  

          </div>
      
          <div className={styles.info}>
           
          <Link href="/#contactus" className={styles.info}>studentsasneighbours@outlook.com</Link><br></br>
         
          </div>
          </section>
          

          </section>
          
         
    
    
        


        </div>
       
    <div className={styles.navcontainer}>
        

        <div className={styles.headercontainer}>
            <section className={styles.logosectionwrapper}>
              
              <Link className={styles.firstnav} href="/">
              <a className={styles.logosection } >
                <Image
                className={styles.HeroContentRimg}
                src={mypic}
                alt="logoheader-kids-and-cubs"
                width={"80px"}
                height={"80px"}
      
      
            />
           
           <div className={styles.logotextwrapper}>
            
                <h1 className={[styles.textbottom,styles.clear].join(" ")}>Intergenerational</h1>
                <h2 className={styles.clear}>Live-in Student Program</h2>
                
                </div>
           

                </a>
              </Link>


          
                
             <Link href="/#contactus">
             <div className={ [styles.thirdnav,styles.contactwrappernav,styles.textbottomright,styles.textbottommobile,styles.border].join(" ")}>
                <div className={[styles.noa,styles.thirdnav,styles.textbottom,styles.textbottommobile,styles.border].join(" ")}>sanet.dutoit@sydney.edu.au</div>
               
                <div className={styles.callmelogo}><ContactMailOutlinedIcon></ContactMailOutlinedIcon></div>
                </div>
             </Link>
                
              

                

           

            </section>
            <div className={styles.hamburgericon} >
              
            {!sidebar&&<div className={styles.actualhamburger}><MenuOutlinedIcon className={styles.closehamburger1} onClick={toggle} fontSize={"large"}></MenuOutlinedIcon></div>}
            {sidebar&&< CloseIcon className={styles.closehamburger1} onClick={toggle} fontSize={"large"} ></CloseIcon>}
            

            </div>
            
            
                
                
            
            

        </div>
        

        
        
       





    </div>
    </>
  )
}

export default Navbar