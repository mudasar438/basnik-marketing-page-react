import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import imges from './images/img';
import { useNavigate } from 'react-router-dom';
// import {Stack} from '@mui/material'
import { ButtonGroup, Stack, styled } from '@mui/material';


const StyledButton = styled(Button)(({ theme }) => `
font-size:0.9rem;
// font-weight:semi-bold;
color:white;
border-radius:10px;
height:1.5rem;
// border:2px solid white;
font-family:'Nexa Bold',Helvetica,Arial,Lucida,sans-serif;
margin-top:10px !important;


`)


const Navbar = () => {
    const navigate = useNavigate()
  return (
    
       
          <Box sx={{ flexGrow: 1}}>
            <AppBar position="sticky" display="flex" sx={{ backgroundColor: "#2b57c6", justifyContent: "space-between" }} >
            <Toolbar justifyContent="space-between" alignItems="center">

                <Box mt={1} ml={12}>
                    <img src={imges.logo1} alt="logo" width="90%" height="90%" />
                </Box>
                <Box display={"flex"} flexGrow={0.5}>

                </Box>
                <Stack spacing={2}
                sx={{display:{
                    
                    md:'flex',
                    justifyContent:"center"
                },
            flexWrap:'wrap',
            }}
                direction={{ md: "row" }}   >
                    <StyledButton  onClick={() => navigate('/')} >Home</StyledButton>
                    <StyledButton  onClick={() => navigate('/plans')} >Plans</StyledButton>
                    <StyledButton onClick={() => navigate('/resources')} >Resources</StyledButton>
                    <StyledButton  onClick={() => navigate('/blogs')}>Blogs</StyledButton>
                  
                   
                </Stack>






                    <Button variant="contained"  color="secondary" style={{border:"none"}}  onClick={() => navigate('/contactChannel')}>Request Demo</Button>
            </Toolbar>


        </AppBar >
          </Box>
        );
      }
  


export default Navbar