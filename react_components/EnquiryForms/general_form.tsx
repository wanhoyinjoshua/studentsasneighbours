import React, { useState } from "react";
import styles from "../../styles/Sub.module.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Router from "next/router";
const GeneralForm = () => {
  const [formtype, setForm] = useState("General Enquiry");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [concerns, setConcerns] = useState("");
  const [age, setAge] = useState("");
  const [childname, setChildname] = useState("");
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    height:"auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
   
    
  };
  const sendMail = async () => {
    try {
      console.log("hi")
        
        var plot={concerns:concerns ,clientName:name,number:number,email:email,type:formtype,age:age,childname:childname}
        const response = await fetch("/api/send-email",{method:"POST",headers: {
            'Content-Type': 'application/json',
          },body: JSON.stringify(plot),
        })
        const body = await response.json();
        if (body.ok) {

          return true
            
        }
    } catch (error) {
        console.log(error);
        return false
        // handle the error
    }
  };
  function handleSubmit(){

  }
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = event => {
    event.preventDefault();
    setOpen(true);
  
  }
async function preparetosend(){
  await setLoading(true)
  const result = await sendMail()

  if (result){
    console.log("success")
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/Enquiry-sent-successfully");
    }
  }
  else{
    console.log("not successful")
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/error_404");
    }
  }


}
  const handleClose = () => setOpen(false);
  return (
    <>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            {!loading &&<div className={styles.margin0}>Are you sure you want to submit the form?</div> }
            {loading && <div className={styles.margin0}>Sending</div> }
            <br>
            </br>
            
          </Typography>
          {!loading &&  <div className={styles.spacebetween}>
          <Button variant="contained" color="success" onClick={preparetosend} >Yes</Button>
          <Button variant="contained" color="error" onClick={handleClose}>No</Button>
          </div> }
     
          
        </Box>
      </Modal>
    <form onSubmit={handleOpen}>
    
    <div className={styles.formitem1}>
    <label >Name:</label>
      <input required className={styles.input1} value={name} onChange={(e)=>{setName(e.target.value)}} />
     
      </div>

      <div className={styles.formitem1}>
      <label >Phone No:</label>
      <input  required className={styles.input1} value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      
      </div>

      <div className={styles.formitem1}>
      <label >Email:</label>
      <input type="email" required className={styles.input1} value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    
      </div>

      <div className={styles.formitem1}>
      <label >Ask us anything!:</label>
      <textarea  required className={styles.textarea1} value={concerns} onChange={(e)=>{setConcerns(e.target.value)}} />
      
      </div>

      

      
     
   
  
    <input className={styles.submitbtn1} type="submit" value="Submit"></input>

  </form>
  </>
  )
}

export default GeneralForm