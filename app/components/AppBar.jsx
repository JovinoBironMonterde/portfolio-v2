"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {Box} from '@mui/material'
import { BorderBottom } from '@mui/icons-material';

function AppBar() {
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

  return (
    <header>
      <nav>
        <Box sx={{width: '100%',display: 'flex', justifyContent: 'space-between', px:4, py:1}}>
          <Box>
            <Link
              href="../pages/home"
              style={pathname === '/pages/home' ? activeStyle : defaultStyle}
            >
              Home
            </Link>
            <Link
              href="../pages/about"
              style={pathname === '/pages/about' ? activeStyle : defaultStyle}
            >
              About
            </Link>
            <Link
              href="../pages/profession"
              style={pathname === '/pages/profession' ? activeStyle : defaultStyle}
            >
              Profession
            </Link>
            <Link
              href="../pages/resume"
              style={pathname === '/pages/resume' ? activeStyle : defaultStyle}
            >
              Resume
            </Link>
            <Link
              href="../pages/contact"
              style={pathname === '/pages/contact' ? activeStyle : defaultStyle}
            >
              Contact
            </Link>
            <Link
              href="../pages/blog"
              style={pathname === '/pages/blog' ? activeStyle : defaultStyle}
            >
              Blog
            </Link>
          </Box>
        </Box>
      </nav>
    </header>
  );
}

export default AppBar;