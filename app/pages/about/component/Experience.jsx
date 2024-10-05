import { Typography, Box, Chip  } from '@mui/material';
import React from 'react';
import './../../../assets/css/globals.css';
import RevealAnimation from '@/app/components/RevealAnimation';

function Experience() {
  return (
    <div>  
      <Box>
        <Box sx={{ mb: 4, color: '#fff' }} className="reveal active fade-bottom">
          <Typography variant="h5">Concentrix</Typography>
          <Typography variant="subtitle1">September 2016 - December 2021</Typography>
          <Typography variant="h6">Security Control Officer</Typography>
          <Typography sx={{fontSize: 14}}>
            As a Security Control Officer at Concentrix, I was responsible for the activation and deactivation of badges for active, AWOL, and resigned employees. My role involved monitoring and maintaining surveillance systems, observing suspicious activities, and alerting authorities during security breaches. I prepared detailed incident reports, ensured the proper maintenance of equipment, and complied with company policies. Additionally, I collaborated closely with security teams to enhance overall safety protocols and address any potential fraud or threats effectively.
          </Typography>
          {/* <Chip label="Active"  color="success" sx={{ mt: 1 }}/> */}
          {/* <Chip label="Resigned" color="error" sx={{ mt: 2 }} /> */}
        </Box>

         <Box sx={{ mb: 4, color: '#fff' }} className="reveal active fade-bottom">
          <Typography variant="h5">Automation and Security, Inc.</Typography>
          <Typography variant="subtitle1">September 2022 - November 2022</Typography>
          <Typography variant="h6">Office Admin</Typography>
          <Typography sx={{fontSize: 14}}>
            Maintain organized and up-to-date files, documents, and records related to the company&apos;s operations, including customer orders, invoices, and contracts.
          </Typography>
          {/* <Chip label="Active"  color="success" sx={{ mt: 1 }}/> */}
          {/* <Chip label="Resigned" color="error" sx={{ mt: 2 }} /> */}
        </Box>

        <Box sx={{ mb: 4, color: '#fff' }} className="reveal active fade-bottom">
          <Typography variant="h5">Telmo Solution</Typography>
          <Typography variant="subtitle1">September 2016 - December 2021</Typography>
          <Typography variant="h6">Security Control Officer</Typography>
          <Typography sx={{fontSize: 14}}>
          Take design mockups and translate them into clean, responsive, and pixel-perfect web interfaces. Write well-structured HTML, CSS, and JavaScript code to ensure smooth integration with backend systems.
          </Typography>
          {/* <Chip label="Active"  color="success" sx={{ mt: 1 }}/> */}
          {/* <Chip label="Resigned" color="error" sx={{ mt: 2 }} /> */}
        </Box>

         <Box sx={{ mb: 4, color: '#fff' }} className="reveal active fade-bottom">
          <Typography variant="h5">Mimnu (Hybrid)</Typography>
          <Typography variant="subtitle1">May 2023 - May 2024</Typography>
          <Typography variant="h6">Front-End Web Developer</Typography>
          <Typography sx={{fontSize: 14}}>
          My role at Mimnu, an e-commerce site, I am responsible for designing each webpage with a strong emphasis on creating interactive and engaging user experiences. Additionally, I ensure that these designs are seamlessly integrated into a mobile-responsive format, guaranteeing optimal functionality across various devices and enhancing the overall usability of the website.
          </Typography>
          {/* <Chip label="Active"  color="success" sx={{ mt: 1 }}/> */}
          {/* <Chip label="Resigned" color="error" sx={{ mt: 2 }} /> */}
        </Box>

        <Box sx={{ mb: 4, color: '#fff' }} className="reveal active fade-bottom">
          <Typography variant="h5">Lolita Heights Hotel</Typography>
          <Typography variant="subtitle1">March 2024 - August 2024</Typography>
          <Typography variant="h6">Property Management System(PMS)</Typography>
          <Typography sx={{fontSize: 14}}>
            Built a Property Management System using React.js and Material-UI (MUI). Developed features like Check-in/Check-out, online booking, employee scheduling, payroll, and biometric attendance tracking. Designed responsive UIs, integrated RESTful APIs, and collaborated with backend teams to optimize performance. Delivered a scalable, user-friendly solution that enhanced operational efficiency.
          </Typography>
          {/* <Chip label="Active"  color="success" sx={{ mt: 1 }}/> */}
          {/* <Chip label="Resigned" color="error" sx={{ mt: 2 }} /> */}
        </Box>
      </Box>
    </div>
  );
}

export default Experience;
