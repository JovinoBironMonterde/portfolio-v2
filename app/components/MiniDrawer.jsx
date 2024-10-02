"use client";
import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

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
    <div>
      <Box
      sx={{
        position: 'fixed', 
        top: '110px', 
        left: '40px',
        zIndex:99999, 
        bgcolor: 'gray',
        borderRadius: '50%',
        p:0
        }}>
        <IconButton onClick={handleToggleDrawer(true)}  aria-label="Example">
            <PersonIcon />
        </IconButton>
        </Box>
      <Drawer anchor="left" open={open} onClose={handleToggleDrawer(false)} sx={{zIndex:999999, pr:4}}>
      <Box
        sx={{
          width: '100%',
          // maxWidth: 350,
          height: '80%',
          my: 'auto',
          mr:20,
          bgcolor: '#f4f4f4',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '2px 4px 10px rgba(0, 0, 0, .5)', // Example custom boxShadow
          height:{
            xl: '80%', md: '80%', xs: '100%'
          }
        }}
      >

    <div>
      <IconButton onClick={handleToggleDrawer(false)}  aria-label="Example">
        close
      </IconButton>
        <Stack spacing={1} sx={{ alignItems: 'center', p:3, bgcolor: '#087ea2', }}>
         <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center'}}>
          <Avatar
              alt="Remy Sharp"
              src="/img/image12.png"  // If you move the image to the public/img folder
              sx={{ width: 256, height: 256, bgcolor: '#f4f4f4' }}
            />
          </Stack>
          <Chip label="primary" fontSize="30px" color="primary" />
          </Stack>
        
    </div>
    </Box>
      </Drawer>
    </div>
  );
}
