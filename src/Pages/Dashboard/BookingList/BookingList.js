import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BookingListDetails from './BookingListDetails';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, [])
  return (
    <Grid container spacing={4}>
      {
        bookings.map(booking => <BookingListDetails booking={booking} key={booking._id}></BookingListDetails>)
      }
    </Grid>
  );
};

export default BookingList;