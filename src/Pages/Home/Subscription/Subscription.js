import { Button, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
const Subscription = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Box sx={{ background: '#FFF8F5',display: 'flex',justifyContent: 'center'}}>
      <Box sx={{ width: '760px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField sx={{ width: '100%' }} {...register("firstName")} label="FirstName" variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField sx={{ width: '100%' }} {...register("lastName")} label="LastName" variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField sx={{ width: '100%' }} {...register("emailAddress")} label="Email Address" variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField sx={{ width: '100%' }} {...register("phoneNumber")} label="Phone Number" variant="standard" />
            </Grid>
            <Grid item xs={12} md={12}>
              <textarea rows={10} style={{ width: '100%' }} {...register("message")}placeholder="Your Message" />
            </Grid>
          </Grid>
          <Button type="submit">submit </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Subscription;