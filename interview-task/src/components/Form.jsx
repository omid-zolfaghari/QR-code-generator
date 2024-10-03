"use client"

import { Container, Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { createURL } from "../utils/urlActions";



export default function Form() {
    
  const [newLink, setNewLink] = useState("")
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await createURL("http://localhost:3000/api/url",newLink) 
       setNewLink("")
       
       }
  return (
    <Container sx={{width :"550px", marginY:"3rem"}}>
      <form style={{display : "flex", alignItems : "center", gap:"10px"}} onSubmit={(e)=>handleSubmit(e)}>
        <TextField label="Enter URL" variant="outlined" required sx={{width:300}} value={newLink} onChange={(e)=> setNewLink(e.target.value)} />
          <Button variant="contained" type="submit">Generate</Button>
      </form>
    </Container>
  )
}

