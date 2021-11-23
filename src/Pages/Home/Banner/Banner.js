import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PrimaryButton from '../../../CoustomStyle/MuiButton';
import img from '../../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
const Banner = () => {
  return (
    <Box sx={{ background: '#FFF8F5', height: '677px' }}>
      <Container sx={{ pt: 15, pb: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography sx={{ fontSize: 48, fontWeight: 700, color: '#111430' }}>
                BEAUTY SALON
              </Typography>
              <Typography sx={{ fontSize: 48, fontWeight: 700, color: '#111430' }}>
                FOR EVERY WOMEN
              </Typography>
              <Typography variant="body1" sx={{ mt: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
              </Typography>
              <PrimaryButton sx={{ mt: 4 }} variant="contained">Get an Appointment</PrimaryButton>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <img width="484px" src={img} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner