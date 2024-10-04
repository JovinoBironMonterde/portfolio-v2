// app/pages/about/page.jsx
"use client"
import React from 'react';
import "../../assets/css/ProfessionStyle.css"
import "../../assets/css/globals.css";
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Typography, Divider } from '@mui/material';
import Image from 'next/image';
import { Position } from '@react-pdf-viewer/core';
import Skills from './component/Skills';
import Experience from './component/Experience';
import RevealAnimation from '@/app/components/RevealAnimation';


const About = () => {
   const percentage = 100; //
  return (
    <Box>
      <RevealAnimation />
      <Box
        sx={{
          // minHeight: '80vh',
          height:'auto',
          display: 'flex',
          alignItems: 'center',
          py:10,
  
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={12} md={6} xl={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{display:{xl:'block', xs: 'none'}}}>
                <Image src="/img/image15.png" width={400} height={400} alt="Description of image" />
                </Box>
                <Box sx={{display:{xl:'none', xs: 'block'}}}>
                <Image src="/img/image15.png" width={300} height={300} alt="Description of image" />
                </Box>
                
              </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
            <Box sx={{ p: { xl: 8, md: 2, xs: 2 } }}>
              <Typography variant="h4" sx={{ fontWeight: 900 }}>
                About
              </Typography>
              <Box sx={{ mb: 3, textAlign: 'justify' }}>
                <Typography variant="body1">
                  Hello! I&apos;m Jovi Monterde, a passionate frontend developer with a love for creating user-friendly web experiences.
                </Typography> 
              </Box>                                                                                                                                                            
              <Box sx={{ textAlign: 'justify' }}>
                <Typography variant="body1">
                  I&apos;m always open to new opportunities and collaborations. If you have a project in mind or just want to chat about all things web development, feel free to reach out. Let&apos;s work together to bring your ideas to life on the web!
                </Typography>
              </Box>
            </Box>
            </Grid>

          </Grid>
        </Box>
      </Box>
      <Box sx={{ height: 'auto', bgcolor: '#017598', py:3 }}>
      <Box 
      sx={{ 
        flexGrow: 1,
        position: 'relative',
        "::before": {
          position: 'absolute',
          content: '""', 
          width: "5px", 
          height: "100%",
          left: '50%',
          backgroundColor: "gray", 
          display: {
            xl: 'block', 
            md: 'block', 
            xs: 'none'
          }
        },
      }}>
          <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', p:{xl:8, md:4, xs:2}}}>
            <Grid item xs={12} md={5.5} xl={5.5}>
              <Skills/>
            </Grid>
            <Grid item xs={6} md={1} xl={1} textAlign={'center'}sx={{ display:{xl: 'block', md:'block', xs:'none'}}}>
              {/* <Box sx={{width: '4px', maxHeight: 'unset', height: '80vh', bgcolor: 'gray', mx:'auto'}}></Box> */}
            </Grid>
            <Grid item xs={12} md={5.5} xl={5.5}>
              <Experience/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
