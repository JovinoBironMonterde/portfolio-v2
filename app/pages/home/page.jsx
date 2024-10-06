"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid, Typography} from '@mui/material';
import "../../assets/css/HomeStyle.css"
import Image from 'next/image';



function page() {
  return (
    <div className='Home-Page-Container'>
      <Box sx={{ flexGrow: 1, width: '100%', height: '90%', p:5, py:20 }}>
        <Grid container spacing={2} sx={{p:4, borderRadius: 5}}>
          <Grid item xs={12} md={12} >
            <Typography variant="h5" mb={2}>Hello, I&apos;m</Typography>
            <Typography variant="h2" mb={2}>Jovino Monterde</Typography>
            <Typography variant="h3" mb={2}>I&apos;m a Frontend Developer</Typography>
            <Typography variant="h6" mb={2}>I&apos;m focused on building responsive front-end web applications integrating back-end technologies.</Typography>
          </Grid>
        </Grid>
      </Box>
      
    </div>
  )
}

export default page
