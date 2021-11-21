import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { title, description, image, price, _id } = service;

  return (
    <Grid item xs={12} md={4} >
      <Link to={`/service/${_id}`} style={{textDecoration: 'none'}}>
        <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '300px', px: 5 }}>
          <Box>
            <img style={{ paddingTop: '36px', paddingBottom: '16px', width: 72 }} src={`data:image /png; base64, ${image} `} alt="" />
          </Box>
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
            {price}
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 300 }}>
            {description}
          </Typography>
        </Paper >
      </Link>
    </Grid >
  );
};

export default Service;