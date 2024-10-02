"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    marginBottom: '30px',
  }),
}));


export default function BlogPostList() {
  return (
    <Box sx={{ width: "100%", height: "100vh", overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={25}>
        {blogPosts.map((post) => (
          <Item sx={{mb:4}}>
          <ImageListItem key={post.img}>
            <img
              srcSet={`${post.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${post.img}?w=248&fit=crop&auto=format`}
              alt={post.title}
              loading="lazy"
            />
            <Box sx={{ padding: 1 }}>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2">{post.description}</Typography>
            </Box>
          </ImageListItem>
          </Item>
        ))}
      </ImageList>
    </Box>
  );
}

const blogPosts = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Exploring the Beauty of Nature',
    description: 'A journey through the serene landscapes of the wilderness.',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Understanding the Art of Cooking',
    description: 'Delve into culinary skills and delightful recipes.',
  },

  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Home Decor Inspirations',
    description: 'Ideas and tips to elevate your living space.',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Understanding the Art of Cooking',
    description: 'Delve into culinary skills and delightful recipes.',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'The Magic of Reading',
    description: 'Discover the worlds that books can open up.',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Home Decor Inspirations',
    description: 'Ideas and tips to elevate your living space.',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'The Magic of Reading',
    description: 'Discover the worlds that books can open up.',
  },
  // Add more blog posts as needed
];
