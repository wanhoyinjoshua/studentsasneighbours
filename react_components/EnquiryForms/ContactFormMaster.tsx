import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import AssessmentSubForm from "./AssessmentSubform"
import GeneralForm from "./general_form";
import TrainingForm from "./TrainingForm";
import Image from 'next/image'
import mypic from "../../public/Assets/Contact-Form-Picture.webp"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const MasterContactForm = () => {
  const [formtype, setForm] = useState("GeneralForm");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [concerns, setConcerns] = useState("");
  const [age, setAge] = useState("");
  const [childname, setChildname] = useState("");
  
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);



  const [message, setMessage] = useState("AssessmentForm");
async  function  Showassessment(string){
  
    setMessage(string)
   
}
async function ConfirmClose(form,b){
  await Showassessment(form)
  b()
}
const [modalOpen, setModalOpen] = React.useState(false);

  const sendMail = async () => {
    try {
      console.log("hi")
        
        var plot={concerns:concerns ,clientName:name,number:number,email:email,type:formtype,age:age,childname:childname}
        const response = await fetch("http://localhost:3000/api/send-email",{method:"POST",headers: {
            'Content-Type': 'application/json',
          },body: JSON.stringify(plot),
        })
        const body = await response.json();
        if (body.ok) {
            
        }
    } catch (error) {
        console.log(error);
        // handle the error
    }
  };

  function handleSubmit(){

  }
  return (
    <>
     
      <Modal
        open={open && message!="GeneralForm"}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className={styles.margin0}>Are you sure you want to open the General Enquiry form?
            <br>
            </br>
            Your form will not be saved.
            </div>
          </Typography>
        <div className={styles.spacebetween}>
        <Button variant="contained" color="success" onClick={()=>{ConfirmClose("GeneralForm",handleClose)}}>Yes</Button>
          <Button color="error" variant="contained" onClick={handleClose}>No</Button>

        </div>
          
          
        </Box>
      </Modal>

      <Modal
        open={open2 && message!="AssessmentForm"}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className={styles.margin0}>
            Are you sure you want to open the Assessment form?
            <br>
            </br>
            Your form will not be saved.

            </div>
          
          </Typography>
          <div className={styles.spacebetween}>
          <Button variant="contained" color="success" onClick={()=>{ConfirmClose("AssessmentForm",handleClose2)}}>Yes</Button>
          <Button variant="contained" color="error" onClick={handleClose2}>No</Button>
      </div>
        </Box>
      </Modal>




     
     
    <section >
   
  <div className={styles.contactbox}>
    <div className={styles.contactlinks}>
      <div className={styles.bgchar}>
      <h2 className={styles.h2}>Contact Us!</h2>
      <div className={styles.iconcenterwrapper}><div className={styles.iconcenter}><MailIcon></MailIcon></div><a href="mailto:info@kidsandcubsclinic.com.au">info@kidsandcubsclinic.com.au</a></div>
      
      <br></br>
      <div className={styles.iconcenterwrapper}><div className={styles.iconcenter}><LocationOnIcon></LocationOnIcon></div><a target="blank" href="https://www.google.com/maps/place/110+Reynolds+St,+Balmain+NSW+2041">126/85 Reynolds Street, Balmain NSW 2041</a></div>
      <br></br>
      </div>
      <div className={styles.links}>
      <Image
      src={mypic}
      alt="Picture of the author"
      
    height={500}
    width={500}
    />
        
       
      </div>
    </div>
    <div className={styles.contactformwrapper}>

    <div className={styles.container}>
      
      <div className={styles.navlinks}>Or fill out one  of these forms to reach us directly!</div>
      <br></br>
          <div className={styles.btncontainer}>

          <button  className={message=="AssessmentForm" ? styles.formbtn1assessment : styles.formbtn1}  onClick={handleOpen2} disabled={message=="AssessmentForm"}   >Book Appointment</button>
          <button  className={message=="GeneralForm" ? styles.formbtn1assessment : styles.formbtn1}   onClick={handleOpen  }  disabled={message=="GeneralForm"}>General Enquiry</button>
         
      
          

            
          </div>
         
          <br></br>
          <br></br>
          <br></br>
          {message=="GeneralForm" && <GeneralForm></GeneralForm>}
          {message=="AssessmentForm" && <AssessmentSubForm></AssessmentSubForm>}
        

            
            
            
        </div>
      
    </div>
  </div>
</section>



  </>
  )
}

export default MasterContactForm