"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import "../../assets/css/svg.css";
import "../../assets/css/globals.css";
import { styled } from '@mui/material/styles';
import {Grid, TextField, Paper, Box, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Page = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Set a delay before showing the image (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 500); // Delay in milliseconds (2000ms = 2 seconds)

    // Cleanup the timer if the component unmounts before the delay completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Box sx={{ width: '100%', height: '85vh', display: 'flex', alignItems: 'center', py:10}}>
        <Box sx={{width: '100%'}}>
          <Box sx={{textAlign: 'center', mb:5}}>
            <Typography variant="h4" component="h2">-Get In Touch-</Typography>
          </Box>
          <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} xl={6}>
                <Box sx={{ display:'flex', justifyContent:'center'}}>
                  {showImage ? (
                    <Image src="/file/Contactsvg.svg" className='SvgIcon' width={400} height={400} alt="Description of image" />
                  ) : (
                    <p></p> // Optional: You can replace this with any placeholder
                  )}
              </Box>
              </Grid>
              <Grid item xs={12} md={6} xl={6} >
                <Box component="form" sx={{ mx: 'auto', py:4, width:{xl:'60%', md: '60%', xs:'96%'}, position: 'relative'}} noValidate autoComplete="off">
                  <Box sx={{ mb:2}}>
                    <TextField fullWidth id="fullname"  placeholder="Fullname"/>
                  </Box>
                  <Box sx={{ mb:2}}>
                    <TextField fullWidth id="company" placeholder="Company"/>
                  </Box>
                  <Box sx={{ mb:2}}>
                    <TextField fullWidth id="contact" placeholder="Contact"/>
                  </Box>
                  <Box sx={{ mb:2}}>
                    <TextField fullWidth id="message" placeholder="Write something.." rows={3} multiline/>
                  </Box>
                  <Box sx={{textAlign: 'right'}}>
                    <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Page;
