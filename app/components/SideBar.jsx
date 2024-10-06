import React from 'react'
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

function SideBar() {
  return (
    <div>
        <Stack spacing={1} sx={{ width:'100%', alignItems: 'center', pt:4, pb:6, bgcolor: '#066a89', }}>
          <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center'}}>
            <Avatar
                alt="Remy Sharp"
                src="/img/image12.png"  // If you move the image to the public/img folder
                sx={{ width: 200, height: 200, bgcolor: '#f4f4f4' }}
              />
          </Stack>
        </Stack>
          <Box sx={{display: 'flex', justifyContent: 'center', mb:4}}>
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
          <Box sx={{py:3, px:2}}>
            <List sx={{ width: '100%', maxWidth: '355px', }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmailIcon />
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
                    <WorkIcon />
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
          <Divider />
          <Stack direction="row" spacing={3} sx={{justifyContent: 'center', alignItems: 'center', pt:5 }}>
              <a href="https://www.facebook.com/jhovi.norib/" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="facebook" size="large" 
                  sx={{ 
                    bgcolor: '#017598 ',  
                    color: 'white', 
                    '&:hover': { 
                      bgcolor: '#0591a5' ,
                    }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </a>
            
       
              <a href="https://www.instagram.com/jhovi1993/" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="facebook" size="large" 
                  sx={{ 
                    bgcolor: '#017598 ',  
                    color: 'white', 
                    '&:hover': { 
                      bgcolor: '#0591a5' ,
                    }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              </a>
            
       
              <a href="https://www.linkedin.com/in/jovinobironmonterde/" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="facebook" size="large" 
                  sx={{ 
                    bgcolor: '#017598 ',  
                    color: 'white', 
                    '&:hover': { 
                      bgcolor: '#0591a5' ,
                    }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </a>
            
       
              <a href="https://github.com/JovinoBironMonterde" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="facebook" size="large" 
                  sx={{ 
                    bgcolor: '#017598 ',  
                    color: 'white', 
                    '&:hover': { 
                      bgcolor: '#0591a5' ,
                    }
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </a>
            
          </Stack>
    </div>
  )
}

export default SideBar
