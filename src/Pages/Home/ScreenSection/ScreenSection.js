import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const ScreenSection = () => {
  return (
    <Box sx={{ background: '#FFF8F5', height: '600px', py: 5, display: 'flex', alignItems: 'center' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <img width='580px' src={img} sx={{ width: '100%' }} alt="" />
          </Grid>
          <Grid item xs={5}>
            <Typography sx={{ fontSize: 34, fontWeight: 600 }}>
              Let us handle your <br />screen<span style={{ color: '#F63E7B' }}>Professionally</span>
            </Typography>
            <Typography variant="body1" sx={{ pt: 4 }}>
              With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', pt: 8 }}>
              <Box>
                <Typography sx={{ fontSize: 34, fontWeight: 600, color: '#F63E7B' }}>
                  500+
                </Typography>
                <Typography variant="body">
                  Happy Customer
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: 34, fontWeight: 600, color: '#F63E7B' }}>
                  16+
                </Typography>
                <Typography variant="body">
                  Total Service
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ScreenSection;