import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../../CoustomStyle/MuiButton';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
  const { user } = useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    data.email = user.email
    data.name = user.displayName
    console.log(data);
    fetch('http://localhost:5000/addReview', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))

  }

  const useStyle = makeStyles({
    input: {
      width: '50%',
      height: "50px",
      marginBottom: 15,
      // border: 0,
      // borderBottom: '1px solid black'
    },

  })

  const { input } = useStyle()
  return (
    <div>
      <Box sx={{ py: 2 }}>
        <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Review</Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className={input} {...register("name")} type="text" required value={user.displayName} />
        <br />
        <input className={input} {...register("email")} type="text" required value={user.email} />
        <br />
        <textarea style={{ width: '50%', fontFamily: 'roboto', padding: '10px' }} rows={10} {...register("review")} type="text" required placeholder="Review" />
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <PrimaryButton type="submit">Order Now</PrimaryButton>
      </form>
    </div >
  );
};

export default Review;