import { Grid, Paper, Typography } from '@mui/material';
import React from "react";
import Rating from "react-rating"
import { Box } from '@mui/system';

const Testimonial = ({ review }) => {

  return (
    <Grid item xs={12} sm={4} md={3}>
      < Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
          },
        }
        }
      >
        <Paper elevation={0} sx={{ minHeight: '300px', px: 2, py: 5 }}>
          <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', fontWeight: 500 }}>
            {review.name}
          </Typography>
          <Typography variant="body" color="text.secondary" >
            {review.review.split(' ').slice(0, 40).toString().replace(/,/g, ' ')}
          </Typography>
          <Typography variant="body1" sx={{pt:2, color:'#FFAC0C'}}>
            <Rating
              readonly
              initialRating={review.rating}
              emptySymbol="far fa-star iconColor iconColor"
              fullSymbol="fas fa-star iconColor iconColor"
            />
          </Typography>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Testimonial;