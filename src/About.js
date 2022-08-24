import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

const About = () => {

    return (
      <div>
        <h1>About me</h1>
        <p>HI, to tell about me presently working in non IT industry, now I want choose IT Developer as my career,
          as a full stack dveloper. I will develop web and mobile applications. 
           I take into consideration the user experience while writing reusable and efficient code.
           I passionately combine good design, technology, and innovation in all my projects.
          

        </p>

        <Stack direction="row" flex-wrap="wrap" sx={{ m: 10, pl: 60 }} spacing={10}>
            <div sx={{ width: 10, p: 10 }}>
              <a href="https://www.linkedin.com/in/niranjan-reddy-nimma-38305a17a/"><Avatar alt src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/640px-LinkedIn_icon_circle.svg.png" sx={{ width: 30, height: 30 }}/></a>
            </div>
            <div sx={{ width: 10, p: 10 }}>
              <a href="https://github.com/niranjan486"><GitHubIcon sx={{ width: 30, height: 30 }}/></a>
            </div>
            <div>
            <Button onClick={() => { }}>Resume</Button>
            </div>
        </Stack>
       </div>
    );
}

export default About;