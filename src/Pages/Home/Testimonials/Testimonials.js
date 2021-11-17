import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 4;
  useEffect(() => {
    fetch(`https://bike-buzz.herokuapp.com/reviews?page=${page}&&size=${size}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data.reviews);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      })
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value - 1);
  };


  return (
    <Box >
      <Container sx={{ mt: 10, pb: 10 }}>

        <Typography variant="h3" sx={{ fontWeight: 700, fontSize: "34px", display: 'flex', justifyContent: 'center', py: 10 }}>Testimonials</Typography>
        <Grid container spacing={1}>
          {
            reviews.map((review) => <Testimonial key={review._id} review={review}></Testimonial>)
          }
        </Grid>
        <Stack spacing={2}>
          <Box sx={{ pt: 1, display: 'flex', justifyContent: 'center' }}>
            {
              <Pagination count={pageCount} variant="outlined" color="primary" onChange={handleChange} />
            }
          </Box>
        </Stack>
      </Container >
    </Box>
  );
};

export default Testimonials;