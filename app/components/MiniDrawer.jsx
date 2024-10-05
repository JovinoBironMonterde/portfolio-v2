"use client";
import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';

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
        <Drawer anchor="left" open={open} onClose={handleToggleDrawer(false)} sx={{ width: '100%', zIndex:999999, pr:4}}>
        <Box
          sx={{
            width: '100%',
            // maxWidth: 350,
            height: '80%',
            my: 'auto',
            mr:{
              xl:20, xs:0
            },
            bgcolor: '#f4f4f4',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '2px 4px 10px rgba(0, 0, 0, .5)', // Example custom boxShadow
            height:{
              xl: '80%', md: '80%', xs: '100%'
            }
          }}
        >

          <Box sx={{width: '100vw', maxWidth: '550px', bgcolor: '#087ea2', }}>
            <Box>
              <IconButton onClick={handleToggleDrawer(false)} aria-label="Example" sx={{p:3, float: 'right'}}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Stack spacing={1} sx={{ width:'100%', alignItems: 'center', pb:8, bgcolor: '#087ea2', }}>
              <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center'}}>
                <Avatar
                    alt="Remy Sharp"
                    src="/img/image12.png"  // If you move the image to the public/img folder
                    sx={{ width: 200, height: 200, bgcolor: '#f4f4f4' }}
                  />
              </Stack>
              {/* <Chip label="Frontend Developer" fontSize="70px" color="primary" /> */}
            </Stack>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Chip label="Jovino Monterde" color="primary" sx={{fontSize: '20px', p:2, float: 'center'}} />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
