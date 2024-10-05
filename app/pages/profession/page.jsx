"use client";
import React from 'react';
import {Box, Paper, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';

function page() {

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
