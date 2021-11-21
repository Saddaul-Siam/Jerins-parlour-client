import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../CoustomStyle/MuiButton';
import Service from './Service';


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])
  return (
    <Box sx={{ height: '677px' }}>
      <Typography sx={{ display: 'flex', justifyContent: 'center', py: 9, fontSize: 34, fontWeight: 700 }}>
        Our Awesome<Box sx={{ color: '#F63E7B', pl: 1 }}>  Services</Box>
      </Typography>
      <Container>
        <Grid container spacing={2}>
            {
              services.map(service => <Service service={service} key={service._id}></Service>)
            }
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 7 }}>
          <Link to="/explore" style={{ textDecoration: 'none' }}><PrimaryButton variant="contained">Explore more</PrimaryButton></Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;