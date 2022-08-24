import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '@mui/material/Avatar';
import "./App.css";



export default function Contact() {
  return (
    <Stack direction="row" spacing={20} sx={{ mt: 15, pl: 30 }}>
       
      <div>
      <div>
           <h3 class="contact__title">Call me</h3>             
           <CallIcon color="primary" fontSize='large'/><span class="contact__subtitle">+91 96529 58399</span>                                
      </div>
      <div>
           <h3 class="contact__title">Email</h3>             
           <EmailIcon color="primary" fontSize='large'/><span class="contact__subtitle">n.niranjan486@gmail.com</span>                                
      </div>
      <Stack direction="row" flex-wrap="wrap" sx={{ m: 10, pl: 10 }} spacing={10}>
            <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/640px-LinkedIn_icon_circle.svg.png" sx={{ width: 30, height: 30 }}/>
            </div>
            <div sx={{ width: 10, p: 10 }}>
            <GitHubIcon sx={{ width: 30, height: 30 }}/>
            </div>
            
        </Stack>
       
      </div>
      <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '30ch' },
      }}
      Validate
      autoComplete="off"
      >
      <div>
      <div>
      <TextField
          label="Name"
          id="Name"
          defaultValue="Name"
          size="small"
        />
      </div>
      <div>
        <TextField
          label="Email"
          id="Email"
          defaultValue="Email"
          size="small"
        />
      </div>
      <div>
        <TextField
          label="Message"
          id="Message"
          defaultValue="Message"
          size="small"
          sx={{ width: 30, height: 50 }}
        />
      </div>
      <Button
  onClick={() => {
    alert('Message sent');
  }}
>
  Send
      </Button>
      </div>
      
    
      
    
      
    
    </Box>
      </div>
    
    </Stack>
   
  );
}
