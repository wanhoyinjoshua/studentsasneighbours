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

<Link  href="/#Our-Services">
    <button ref={ref}  onPointerEnter={() => setOpen(true)} className={styles.button} >Projects</button>
</Link>
<Divider orientation="vertical" variant="middle" flexItem />
<Link href="/About-us">
<button ref={ref2}  onPointerEnter={() => setOpen2(true)} className={styles.button}>Meet our students</button>
</Link>
<Divider orientation="vertical" variant="middle" flexItem />

<Link href="/#contactus">
<button ref={ref3}  onPointerEnter={() => setOpen3(true)} className={styles.button}>Media Coverage </button>
</Link>

    
    
    
    
    
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
  <MenuItem>Grannytell</MenuItem>
  
  <MenuItem>Walking trail with Southampton University</MenuItem>
</ControlledMenu>
<ControlledMenu
  state={isOpen2 ? 'open' : 'closed'}
  anchorRef={ref2}
  onPointerLeave={() => setOpen2(false)}
  onClose={() => setOpen2(false)}
  transition
>
  <MenuItem>Scalabrini</MenuItem>
  <MenuItem>Calvary</MenuItem>
  
</ControlledMenu>

<ControlledMenu
  state={isOpen3 ? 'open' : 'closed'}
  anchorRef={ref3}
  onPointerLeave={() => setOpen3(false)}
  onClose={() => setOpen3(false)}
  transition
>
  <MenuItem>Videos</MenuItem>
  <MenuItem>Articles</MenuItem>
  <MenuItem>Podcasts/Radios</MenuItem>
  
</ControlledMenu>
    
    </>
   
  )
}

export default Navbarlink