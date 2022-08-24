import React from "react";
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import "./App.css";
import { useState} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { alignProperty } from "@mui/material/styles/cssUtils";







export default function App() {
  

  const navigate = useNavigate();
  const [mode, setMode] = useState("light");

 
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
      
   return (
    <ThemeProvider theme={theme}>
      <Paper style={{borderRadius: 0, minHeight: "100vh"}}elevation={24} >
      {/* <CssBaseline />  */}
      <div className="App">



 <AppBar position="static">
  <Toolbar >
  
  <Typography
            variant="h6"
            component="div"
            sx={{  pr: 95,  display: { xs: 'none', sm: 'block' }  }}
           
          >
            Niranjan Reddy Nimma
          </Typography>
  <Button color="inherit" 
  onClick={() => navigate("/")}>Home</Button>
  <Button color="inherit" 
  onClick={() => navigate("/about")}>About</Button>
  <Button color="inherit" 
  onClick={() => navigate("/skills")}>Skills</Button>
  <Button color="inherit" 
  onClick={() => navigate("/projects")}>Projects</Button>
  <Button color="inherit" 
  onClick={() => navigate("/contact")}>Contact</Button>
   <Button 
   startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
   color="inherit" 
   onClick={() => setMode( mode == "light" ? "dark" : "light")}> {mode == "light" ? "dark" : "light"} Mode</Button>
  </Toolbar>
 </AppBar>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
   <Route path="/contact" element={<Contact />} />
     
          </Routes>  

  </div>
  </Paper>
     </ThemeProvider>

    
  );
  //JSX ends
}

