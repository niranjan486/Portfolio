import { Stack } from "@mui/system";
import React from "react";
import Avatar from '@mui/material/Avatar';

const Skills = () => {
return (
<Stack>
    <h1>Technical Skills</h1>
    <Stack direction="row" flex-wrap="wrap" sx={{ m: 0, pl: 20 }}>
        <Stack sx={{ m: 5, pl: 10 }} spacing={10}>
        <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://icon-library.com/images/91de50e59c.svg.svg" sx={{ width: 50, height: 50 }}/>JavaScript
            </div>
            <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://img.icons8.com/color/2x/html-5.png" sx={{ width: 50, height: 50 }}/>HTML
            </div>
            <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://img.icons8.com/color/344/css3.png" sx={{ width: 50, height: 50 }}/>CSS
            </div>
            
        </Stack>
        <Stack sx={{ m: 5, pl: 10 }} spacing={10}>
        <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png" sx={{ width: 50, height: 50 }}/>BootStrap
            </div>
        <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" sx={{ width: 50, height: 50 }}/>React
            </div>
            <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png" sx={{ width: 50, height: 50 }}/>GitHub
            </div>
            
        </Stack>
        <Stack sx={{ m: 5, pl: 10 }} spacing={10}>
        <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://cdn-icons-png.flaticon.com/512/919/919825.png" sx={{ width: 50, height: 50 }}/>NodeJS
            </div>
            <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUuQfUfKpXoY70Mtf9GWKh4C6OQLndS1IxNWCBU2Yh8w&s" sx={{ width: 50, height: 50 }}/>MySQL
            </div>
        <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://cdn.icon-icons.com/icons2/2415/PNG/128/mongodb_original_wordmark_logo_icon_146425.png" sx={{ width: 50, height: 50 }}/>Mongo DB
            </div>
            
        </Stack>
        <Stack sx={{ m: 5, pl: 10 }} spacing={10}>
        <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://img.icons8.com/color/2x/redux.png" sx={{ width: 50, height: 50 }}/>Redux
            </div>
            <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://img.icons8.com/color/2x/heroku.png" sx={{ width: 50, height: 50 }}/>Heroku
            </div>
            <div sx={{ width: 10, p: 10 }}>
            <Avatar alt src="https://cdn.iconscout.com/icon/free/png-64/postman-3521648-2945092.png" sx={{ width: 50, height: 50 }}/>Postman
            </div>

        </Stack>
     </Stack>
</Stack>

);


}

export default Skills;