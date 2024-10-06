"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SegmentIcon from '@mui/icons-material/Segment';

// Active style for selected link
const activeStyle = {
  borderBottom: '2px solid orange', // Corrected from 'BorderBottom'
  color: 'orange',
  padding: '5px 10px',
  borderRadius: '5px',
  textDecoration: 'none',
};

// Default style for non-selected links
const defaultStyle = {
  borderBottom: '2px solid transparent', // Corrected capitalization
  padding: '5px 10px',
  textDecoration: 'none',
  color: 'black',
};

function AppbarMobile() {
  const pathname = usePathname(); // Get the current path
  const [topOpen, setTopOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setTopOpen(open);
  };

  // Links array for navigation
  const links = [
    { name: 'Home', href: '../pages/home' },
    { name: 'About', href: '../pages/about' },
    { name: 'Profession', href: '../pages/profession' },
    { name: 'Resume', href: '../pages/resume' },
    { name: 'Contact', href: '../pages/contact' },
    { name: 'Blog', href: '../pages/blog' }
  ];

  // List for Drawer component
  const list = () => (
    <Box
      sx={{ width: 'auto', bgcolor: '#f4f4f4', py:4 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {links.map((link, index) => (
          <ListItem key={link.name} disablePadding sx={{display:'flex',textAlign: 'center', justifyContent:'center'}}>
            <Link
              href={link.href}
              style={pathname === link.href ? activeStyle : defaultStyle}
            >
              {link.name}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>
      <Box>
      <Box onClick={toggleDrawer(true)} sx={{color: '#fff', fontSize:30}}><SegmentIcon/></Box>
      <Drawer
        anchor="top"
        open={topOpen}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: 999999, bgcolor: 'transparent',py:5 }}
      >
        {list()}
      </Drawer>
      </Box>
    </div>
  );
}

export default AppbarMobile;
