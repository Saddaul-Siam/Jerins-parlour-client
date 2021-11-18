import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PrimaryButton from '../../../CoustomStyle/MuiButton';
import img1 from '../../../Image_Icon/Icon/Group 1372.png'
import img2 from '../../../Image_Icon/Icon/Group 1373.png'
import img3 from '../../../Image_Icon/Icon/Group 1374.png'




const Services = () => {
  return (
    <Box sx={{ height: '677px' }}>
      <Typography sx={{ display: 'flex', justifyContent: 'center', py: 9, fontSize: 34, fontWeight: 700 }}>
        Our Awesome<Box sx={{color:'#F63E7B',pl:1}}>  Services</Box>
      </Typography>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '300px', px: 5 }}>
              <Box>
                <img style={{ paddingTop: '36px', paddingBottom: '16px', width: 72 }} src={img1} alt="" />
              </Box>
              <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                Anti Age Face Treatment
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                $199
              </Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 300 }}>
                We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper /*  elevation={3} */ sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '300px', px: 5 }}>
              <Box>
                <img style={{ paddingTop: '36px', paddingBottom: '16px', width: 72 }} src={img2} alt="" />
              </Box>
              <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                Anti Age Face Treatment
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                $199
              </Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 300 }}>
                Amazing flyers, social media posts and brand representations that would make your brand stand out.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '300px', px: 5 }}>
              <Box>
                <img style={{ paddingTop: '36px', paddingBottom: '16px', width: 72 }} src={img3} alt="" />
              </Box>
              <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                Anti Age Face Treatment
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                $199
              </Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 300 }}>
                With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 7 }}>
          <PrimaryButton variant="contained">Explore more</PrimaryButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;