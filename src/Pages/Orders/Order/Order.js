import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { makeStyles } from '@mui/styles';
import Navigation from '../../Shared/Navigation/Navigation';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import PrimaryButton from '../../../CoustomStyle/MuiButton';
import useAuth from '../../../Hooks/useAuth';

const Order = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const { title, description, image, price } = service;
  const { user } = useAuth()

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then(response => response.json())
      .then(data => setService(data?.[0]))
  }, [serviceId]);


  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = data => {
    data.productName = title
    data.price = price
    data.image = image
    data.description = description
    data.status = "pending"
    fetch(`http://localhost:5000/booking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          reset()
        }
      })
  };

  const useStyle = makeStyles({
    input: {
      width: '100%',
      height: "50px",
      marginBottom: 15,
      border: 0,
      borderBottom: '1px solid black'
    },

  })

  const { input } = useStyle()
  return (
    <Container sx={{ mt: 15 }}>
      <Navigation></Navigation>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card >
            <Box className="ordersImages" sx={{ display: 'flex', justifyContent: 'center' }}>
              <CardMedia
                sx={{ width: '50%', }}
                component="img"
                image={`data:image /png; base64, ${image} `}
                alt="bike"
              />
            </Box>
            <CardHeader title={title} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Product Name</Typography>
            <input className={input} value={service.title} {...register("productName")} type="text" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Price</Typography>
            <input className={input} value={service.price} {...register("price")} type="number" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Your Name</Typography>
            <input className={input} defaultValue={user?.displayName}   {...register("name")} type="text" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Email</Typography>
            <input className={input} defaultValue={user?.email}  {...register("email")} type="email" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Address</Typography>
            <input className={input} placeholder="Your Address"  {...register("address")} type="text" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>City</Typography>
            <input className={input} placeholder="Your City"   {...register("city")} type="text" required />
            {errors.exampleRequired && <span>This field is required</span>}
            <PrimaryButton className={input} type="submit">Order Now</PrimaryButton>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Order;
