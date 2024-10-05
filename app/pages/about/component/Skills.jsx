import React, { useState, useEffect, useRef } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const OuterBar = {
  position: 'relative',
  width: '100%',
  height: '14px',
  marginRight: '10px',
  background: '#E4E4E4',
  borderRadius: '25px',
};

const InnerBarStyles = {
  position: 'absolute',
  height: '14px',
  // background: 'green',
  background: '#05a7be',
  borderRadius: '25px',
  transition: 'width 1s ease-in-out',
  right: {md: 0, xs:'unset', xl: '0'},
  left: {md: 'unset', xs:0, xl: 'unset'},
};

const TitleStyles = {
  width: '100%',
  textAlign: { xs: 'left', md:'right', xl: 'right'}
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  color: theme.palette.text.secondary,
  marginBottom: '44px',
}));

function Skills() {
  const skillsData = [
    { id: 1, name: 'HTML', targetPercentage: 90 },
    { id: 2, name: 'CSS', targetPercentage: 90 },
    { id: 2, name: 'Tailwind', targetPercentage: 80 },
    { id: 2, name: 'Bootstrap', targetPercentage: 80 },
    { id: 2, name: 'Material UI', targetPercentage: 80 },
    { id: 3, name: 'JavaScript', targetPercentage: 70 },
    { id: 4, name: 'jQuery', targetPercentage: 70 },
    { id: 4, name: 'React/Next', targetPercentage: 65 },
    // { id: 4, name: 'Git', targetPercentage: 80 },
    // { id: 4, name: 'React', targetPercentage: 70 },
  ];

  return (
    <div>
      {skillsData.map(skill => (
        <SkillItem key={skill.id} name={skill.name} targetPercentage={skill.targetPercentage} />
      ))}
    </div>
  );
}

function SkillItem({ name, targetPercentage }) {
  const [width, setWidth] = useState('0%');
  const [percentage, setPercentage] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(`${targetPercentage}%`);
            animatePercentage(targetPercentage);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const currentRef = skillRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [targetPercentage]);
  

  const animatePercentage = (target) => {
    let current = 0;
    const increment = target / 50; // Adjust speed (higher divisor = slower animation)
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setPercentage(Math.round(current));
    }, 20); // Adjust time interval for smoothness

    return () => clearInterval(interval); // Clean up the interval
  };

  return (
    <Box ref={skillRef} className='reveal active fade-left'>
      <Item>
        <Box sx={{ display: 'flex', alignItems: 'center' }} >
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ ...TitleStyles, pr: 2 }}>{name}</Typography>
            <Box sx={OuterBar}>
              <Box sx={{ ...InnerBarStyles, width }} />
            </Box>
          </Box>
          <Typography
              variant="h3"
              sx={{
                ml: 2,
                // background: (() => {
                //   if (percentage <= 20) {
                //     return "linear-gradient(90deg, rgba(139, 0, 0, 1), rgba(0, 0, 0, 1))"; // Dark Red to Black
                //   } else if (percentage <= 40) {
                //     return "linear-gradient(90deg, rgba(255, 140, 0, 1), rgba(0, 0, 0, 1))"; // Dark Orange to Black
                //   } else if (percentage <= 60) {
                //     return "linear-gradient(90deg, rgba(204, 204, 0, 1), rgba(0, 0, 0, 1))"; // Dark Yellow to Black
                //   } else if (percentage <= 80) {
                //     return "linear-gradient(90deg, rgba(107, 142, 35, 1), rgba(0, 0, 0, 1))"; // Dark Olive Green to Black
                //   } else {
                //     return "linear-gradient(90deg, rgba(0, 100, 0, 1), rgba(0, 0, 0, 1))"; // Dark Green to Black
                //   }
                // })(),
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
              }}
            >
              {percentage}%
            </Typography>

        </Box>
      </Item>
    </Box>
  );
}

export default Skills;
