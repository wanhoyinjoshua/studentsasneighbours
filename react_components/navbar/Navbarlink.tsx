import React ,{useRef,useState}from 'react'

import { Menu, MenuItem, MenuButton,ControlledMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import styles from "../../styles/Navbar.module.css"
import Image from 'next/image'
import mypic from "../../public/Assets/Kidsandcubslogo.svg"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Button , { ButtonProps }from '@mui/material/Button';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Navbarlink = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
const [isOpen, setOpen] = useState<Boolean>();
const [isOpen2, setOpen2] = useState<Boolean>();
const [isOpen3, setOpen3] = useState<Boolean>();
  return (
    <>
    <div className={styles.subheadercontainerwrapper}>
         <div className={styles.sticky}>

<div className={styles.subheadercontainer}>


    <button ref={ref}  onPointerEnter={() => setOpen(true)} className={styles.button} >Projects</button>

<Divider orientation="vertical" variant="middle" flexItem />

<button ref={ref2}  onPointerEnter={() => setOpen2(true)} className={styles.button}>Meet our students</button>

<Divider orientation="vertical" variant="middle" flexItem />


<button ref={ref3}  onPointerEnter={() => setOpen3(true)} className={styles.button}>Media Coverage </button>


    
    
    
    
    
</div>



    </div>

    </div>
   

<ControlledMenu
  state={isOpen ? 'open' : 'closed'}
  anchorRef={ref}
  onPointerLeave={() => setOpen(false)}
  onClose={() => setOpen(false)}
  transition
>
  <MenuItem><Link href={"/projects/grannytell"}><a target="_blank" className={styles.projectlinks}>Grannytell</a></Link></MenuItem>
  
  <MenuItem><Link target="_blank" href={"https://doi.org/10.1080/13607863.2022.2098910"}><a target="_blank" className={styles.projectlinks}> Research Paper </a></Link></MenuItem>
</ControlledMenu>
<ControlledMenu
  state={isOpen2 ? 'open' : 'closed'}
  anchorRef={ref2}
  onPointerLeave={() => setOpen2(false)}
  onClose={() => setOpen2(false)}
  transition
>
  <MenuItem><Link href={"/Meet-our-students"}><div className={styles.projectlinks}>Video introductions</div></Link></MenuItem>
  
  
</ControlledMenu>

<ControlledMenu
  state={isOpen3 ? 'open' : 'closed'}
  anchorRef={ref3}
  onPointerLeave={() => setOpen3(false)}
  onClose={() => setOpen3(false)}
  transition
>
  <MenuItem><Link href={"/Media-videos"}><div className={styles.projectlinks}>Videos</div></Link></MenuItem>
  
  <MenuItem><Link href={"/Media-articles"}><div className={styles.projectlinks}>Articles</div></Link></MenuItem>
  <MenuItem><Link href={"/Media-podcasts"}><div className={styles.projectlinks}>Podcasts/Radio</div></Link></MenuItem>
  
</ControlledMenu>
    
    </>
   
  )
}

export default Navbarlink