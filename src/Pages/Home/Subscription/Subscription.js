import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import PrimaryButton from '../../../CoustomStyle/MuiButton';
const Subscription = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
  };
  return (
    <Box sx={{ background: '#FFF8F5', py: 5 }}>
      <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: 700, fontSize: 34, py: 5 }}>
        Let us handle your <br />
        project, professionally.
      </Typography>
      <Box sx={{ background: '#FFF8F5', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '760px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField sx={{ width: '100%', background: '#fff' }} {...register("firstName")} label="FirstName" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField sx={{ width: '100%', background: '#fff', }} {...register("lastName")} label="LastName" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField sx={{ width: '100%', background: '#fff', }} {...register("emailAddress")} label="Email Address" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField sx={{ width: '100%', background: '#fff', }} {...register("phoneNumber")} label="Phone Number" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={12}>
                <textarea rows={10} style={{ width: '100%',padding: '20px 15px',fontFamily:'roboto',fontSize:'16px'}} {...register("message")} placeholder="Your Message" />
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}><PrimaryButton variant="contained" type="submit">Send Message</PrimaryButton></Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscription;