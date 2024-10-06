"use client";
import * as React from 'react';

import {Drawer, Stack, Box, Chip, IconButton, List, Divider, 
  ListItem, ListItemText, ListItemAvatar, Avatar      } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import ImageIcon from '@mui/icons-material/Image';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';



export default function LeftDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleToggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };



  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{
        position: 'fixed', 
        zIndex:99999, 
        bgcolor: '#087ea2',
        borderRadius: '50%',
        p:0,
        top:{xl: '75px', md:'75px', xs:'54px'},
        left:{xl: '35px', md:'35px', xs:'14px'}
        }}>
        <IconButton onClick={handleToggleDrawer(true)}  aria-label="Example">
            <PersonIcon sx={{color: "#1ed7cd", fontSize:30}} />
        </IconButton>
        </Box>
        <Drawer anchor="left" open={open} onClose={handleToggleDrawer(false)} sx={{ width: '100vh', zIndex:999999, pr:4}}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            my: 'auto',
            mr:{
              xl:20, xs:0
            },
            bgcolor: '#f4f4f4',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '2px 4px 10px rgba(0, 0, 0, .5)', // Example custom boxShadow
            height:{
              xl: '90%', md: '100%', xs: '100%'
            }
          }}
        >

          <Box sx={{width: '100vw', maxWidth: '450px', bgcolor: '#087ea2', }}>
            <Box>
              <IconButton onClick={handleToggleDrawer(false)} aria-label="Example" sx={{p:2, float: 'right'}}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Stack spacing={1} sx={{ width:'100%', alignItems: 'center', pb:6, bgcolor: '#087ea2', }}>
              <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center'}}>
                <Avatar
                    alt="Remy Sharp"
                    src="/img/image12.png"  // If you move the image to the public/img folder
                    sx={{ width: 180, height: 180, bgcolor: '#f4f4f4' }}
                  />
              </Stack>
              {/* <Chip label="Frontend Developer" fontSize="70px" color="primary" /> */}
            </Stack>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', mb:2}}>
            <Chip label="Jovino Monterde"  
            sx={{
              color: '#fff',
              bgcolor: '#05a7be',
              fontSize: '25px',
              p:3, 
              float: 'center', 
              position: 'absolute', 
              boxShadow: '2px 4px 10px rgba(0, 0, 0, .3)',
              mt: -3}} />
          </Box>
          <Box sx={{height: '400px', overflowY: 'scroll'}}>
            <Box sx={{height:'auto',py:1, px:2}}>
              <List sx={{ width: '100%', maxWidth: '355px', }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Freelancer" secondary="Front-End Developer" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Mobile Number" secondary="09704566075" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary="jovinobironmonterdejr2024@gmail.com" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Address" secondary="Blk 66 Lot 25, Channel Ridge View Dist I, Babatngon Leyte" />
                </ListItem>
              </List>
            </Box>
          </Box>
          
          <Divider />
          <Box sx={{width: '100%',position: 'sticky', left: '0', bottom: '0', py:3, bgcolor:'#087ea2'}}>
            <Stack direction="row" spacing={3} sx={{justifyContent: 'center', alignItems: 'center' }}>
              <a href="https://www.facebook.com/jhovi.norib/" target="_blank" rel="noopener noreferrer">
                  <IconButton aria-label="facebook" size="large" 
                    sx={{ 
                      bgcolor: '#05a7be ',  
                      color: 'white', 
                      '&:hover': { 
                        bgcolor: '#1ed7cd' ,
                      }
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                </a>
              
                <a href="https://www.instagram.com/jhovi1993/" target="_blank" rel="noopener noreferrer">
                  <IconButton aria-label="facebook" size="large" 
                    sx={{ 
                      bgcolor: '#05a7be ',  
                      color: 'white', 
                      '&:hover': { 
                        bgcolor: '#1ed7cd' ,
                      }
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                </a>
              
                <a href="https://www.linkedin.com/in/jovinobironmonterde/" target="_blank" rel="noopener noreferrer">
                  <IconButton aria-label="facebook" size="large" 
                    sx={{ 
                      bgcolor: '#05a7be ',  
                      color: 'white', 
                      '&:hover': { 
                        bgcolor: '#1ed7cd' ,
                      }
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </a>
              
                <a href="https://github.com/JovinoBironMonterde" target="_blank" rel="noopener noreferrer">
                  <IconButton aria-label="facebook" size="large" 
                    sx={{ 
                      bgcolor: '#05a7be ',  
                      color: 'white', 
                      '&:hover': { 
                        bgcolor: '#1ed7cd' ,
                      }
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </a>
              
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
