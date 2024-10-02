import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

function SideBar() {
  return (
    <div>
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
        <nav sx={{display: 'flex', alignItems: 'center', my: 'auto', width: '100%'}}>
        <List sx={{width: '100%'}}>
          <ListItem sx={{ fontSize: 20}}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ fontSize: 20}}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ fontSize: 20}}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ fontSize: 20}}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ fontSize: 20}}>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  )
}

export default SideBar
