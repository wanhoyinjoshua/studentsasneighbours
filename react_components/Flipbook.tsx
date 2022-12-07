import React from 'react'
import Image from "next/image"
import Script from "next/script"
import coverpage from "../public/Assets/pictures/grannytell ebook.png"
import styles from "../styles/Flipbook.module.css";
import Button from '@mui/material/Button';
const Flipbook = () => {
  return (
    <div className={styles.main}>
   <a href="https://online.flippingbook.com/view/715848013/" className="fbo-embed" data-fbo-id="8a9aeca676" data-fbo-lightbox="yes" data-fbo-width="250px" data-fbo-height="188px" data-fbo-version="1">
    
    <div  className={styles.center}>
    <Button variant="contained"> Click to read online as a flip book. ( this link will redirect you to flippingbook.com)</Button>
       
    </div>
    <Image src={coverpage}    
    

    />
    
    
    </a><script async defer src="https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=715848013"></script>

    </div>
  )
}

export default Flipbook