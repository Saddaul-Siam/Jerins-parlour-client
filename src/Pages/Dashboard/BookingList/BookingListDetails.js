import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BookingListDetails = ({ booking }) => {
  const { image, productName, status, description } = booking;
  console.log(booking);
  return (
    <Grid item xs={12} md={5}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img style={{ width: '72px' }} src={`data:image/png;base64,${image}`} alt="" />
          <Typography variant="body1">
            <Box sx={{ backgroundColor: 'red',px:2,py:1 }}>
              {status}
            </Box>
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 20, fontWeight: 600, pt: 3, pb: 1 }}>
          {productName}
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default BookingListDetails;