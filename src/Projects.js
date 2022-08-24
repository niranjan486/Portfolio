import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Projects() {

    return (
        <Stack>
            <h1>My Projects</h1>
        <Stack direction="row" flex-wrap="wrap" sx={{ m: 10, pl: 2 }} spacing={10}>
            
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
        alt
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project-1
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Live</Button>
        <Button size="small">Frontend code</Button>
        <Button size="small">Backend code</Button>
      </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
        alt
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project-2
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Live</Button>
        <Button size="small">Frontend code</Button>
        <Button size="small">Backend code</Button>
      </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
        alt
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project-3
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Live</Button>
        <Button size="small">Frontend code</Button>
        <Button size="small">Backend code</Button>
      </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
        alt
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project-4
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Live</Button>
        <Button size="small">Frontend code</Button>
        <Button size="small">Backend code</Button>
      </CardActions>
        </Card>
        </Stack>
        </Stack>
    );

}

