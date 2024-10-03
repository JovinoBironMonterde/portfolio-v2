import React, { useState, useEffect, useRef } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const OuterBar = {
  position: 'relative',
  width: '100%',
  height: '14px',
  marginRight: '10px',
  background: 'gray',
  borderRadius: '25px',
};

const InnerBarStyles = {
  position: 'absolute',
  height: '14px',
  background: 'green',
  borderRadius: '25px',
  transition: 'width 1s ease-in-out',
};

const TitleStyles = {
  width: '100%',
  textAlign: {
    md: 'left',
    xl: 'right',
  },
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  color: theme.palette.text.secondary,
  marginBottom: '24px',
}));

function Skills() {
  const skillsData = [
    { id: 1, name: 'HTML', targetPercentage: 80 },
    { id: 2, name: 'CSS', targetPercentage: 70 },
    { id: 3, name: 'JavaScript', targetPercentage: 90 },
    { id: 4, name: 'React', targetPercentage: 75 },
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
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
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
    <Box ref={skillRef}>
      <Item>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%' }}>
            <Typography sx={{ ...TitleStyles, pr: 2 }}>{name}</Typography>
            <Box sx={OuterBar}>
              <Box sx={{ ...InnerBarStyles, width }} />
            </Box>
          </Box>
          <Typography variant="h3" sx={{ ml: 2 }}>
            {percentage}%
          </Typography>
        </Box>
      </Item>
    </Box>
  );
}

export default Skills;
