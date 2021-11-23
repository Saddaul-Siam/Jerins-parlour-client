import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BookingListDetails from './BookingListDetails';
import useAuth from '../../../Hooks/useAuth';
const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth()

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, [user.email])
  return (
    <Grid container spacing={4}>
      {
        bookings.map(booking => <BookingListDetails booking={booking} key={booking._id}></BookingListDetails>)
      }
    </Grid>
  );
};

export default BookingList;