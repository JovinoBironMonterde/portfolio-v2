"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {Box, Paper, Grid} from '@mui/material'
import { BorderBottom } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

function page() {
  const pathname = usePathname(); // Get the current path

  const activeStyle = {
    // backgroundColor: '#0070f3',
    borderBottom: '2px solid orange', // Corrected from 'BorderBottom'
    color: 'orange',
    padding: '5px 10px',
    borderRadius: '5px',
    textDecoration: 'none',
  };
  

  const defaultStyle = {
    BorderBottom: '2px solid transparent',
    padding: '5px 10px',
    textDecoration: 'none',
    color: '#fff',
  };

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
  
  return (
    <div>
      {/* sdsd
      <Link href="../pages/about" style={pathname === '/pages/about' ? activeStyle : defaultStyle} >
       About
      </Link> */}
      <Box sx={{ flexGrow: 1,p:4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} xl={6}>
          <Item>
            <Box sx={{ height: '350px'}}>
              as
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <Item>sdsa</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default page
